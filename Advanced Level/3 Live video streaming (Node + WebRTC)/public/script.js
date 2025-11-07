const socket = io();
const roomId = 'default-room'; // Basit demo için sabit oda
const localVideo = document.getElementById('localVideo');
const remoteVideo = document.getElementById('remoteVideo');

let localStream;
let peerConnection;

const config = {
    iceServers: [
        { urls: 'stun:stun.l.google.com:19302' } // Google STUN sunucusu
    ]
};

async function start() {
    localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    localVideo.srcObject = localStream;

    socket.emit('join-room', roomId, socket.id);
    createPeerConnection();

    // Eğer diğer kullanıcı bağlıysa sinyal gönder
    socket.on('user-connected', (userId) => {
        console.log('Kullanıcı bağlandı:', userId);
        createOffer(userId);
    });

    socket.on('signal', async({ userId, signal }) => {
        if (signal.type === 'offer') {
            await peerConnection.setRemoteDescription(new RTCSessionDescription(signal));
            const answer = await peerConnection.createAnswer();
            await peerConnection.setLocalDescription(answer);
            socket.emit('signal', { roomId, userId, signal: peerConnection.localDescription });
        } else if (signal.type === 'answer') {
            await peerConnection.setRemoteDescription(new RTCSessionDescription(signal));
        } else if (signal.candidate) {
            try {
                await peerConnection.addIceCandidate(signal);
            } catch (err) {
                console.error('ICE Candidate eklenemedi:', err);
            }
        }
    });

    socket.on('user-disconnected', (userId) => {
        console.log('Kullanıcı ayrıldı:', userId);
        remoteVideo.srcObject = null;
    });
}

function createPeerConnection() {
    peerConnection = new RTCPeerConnection(config);

    // Local stream tracklerini peer bağlantısına ekle
    localStream.getTracks().forEach(track => {
        peerConnection.addTrack(track, localStream);
    });

    // Remote stream geldiğinde video elementine ata
    peerConnection.ontrack = (event) => {
        remoteVideo.srcObject = event.streams[0];
    };

    // ICE adaylarını diğer tarafa gönder
    peerConnection.onicecandidate = (event) => {
        if (event.candidate) {
            socket.emit('signal', { roomId, userId: socket.id, signal: event.candidate });
        }
    };
}

async function createOffer(userId) {
    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);
    socket.emit('signal', { roomId, userId, signal: peerConnection.localDescription });
}

// Başlat
start().catch(console.error);