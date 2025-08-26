const audio = document.getElementById('audio');
const playlistEl = document.getElementById('playlist');
const searchInput = document.getElementById('searchInput');
const coverEl = document.getElementById('cover');
const titleEl = document.getElementById('title');
const artistEl = document.getElementById('artist');
const currentTimeEl = document.getElementById('currentTime');
const totalTimeEl = document.getElementById('totalTime');
const seekEl = document.getElementById('seek');
const volumeEl = document.getElementById('volume');
const muteBtn = document.getElementById('muteBtn');
const waveEl = document.getElementById('wave');

const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const shuffleBtn = document.getElementById('shuffleBtn');
const repeatBtn = document.getElementById('repeatBtn');
const likeBtn = document.getElementById('likeBtn');

const tabs = document.querySelectorAll('.tab');
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const wavesContainer = document.querySelector('.waves-container');


const STORAGE_KEYS = {
    LAST_INDEX: 'cm:lastIndex',
    VOLUME: 'cm:volume',
    MUTED: 'cm:muted',
    FAVORITES: 'cm:favorites',
    RECENTS: 'cm:recents',
    SHUFFLE: 'cm:shuffle',
    REPEAT: 'cm:repeat',
    VIEW: 'cm:view'
};
const TRACKS = [
    {
        id: '1',
        title: 'Drippy',
        artist: 'Sidhu Moose Wala',
        src: 'audio/1.mp3',
        cover: 'img/1.jpg'
    },
    {
        id: '2',
        title: 'Petrol',
        artist: 'Avi sidhu & Grewal 31 31',
        src: 'audio/2.mp3',
        cover: 'img/2.jpg'
    },
    {
        id: '3',
        title: ' Desi Kalakaar ',
        artist: 'Yo Yo Honey Singh',
        src: 'audio/3.mp3',
        cover: 'img/3.jpg'
    },
    {
        id: '4',
        title: 'My Prime',
        artist: 'Navaan Sandhu',
        src: 'audio/4.mp3',
        cover: 'img/4.jpg'
    },
    {
        id: '5',
        title: 'G.O.A.T',
        artist: 'Diljit Dosanjh',
        src: 'audio/5.mp3',
        cover: 'img/5.jpg'
    },
    {
        id: '6',
        title: 'Ilzaam',
        artist: 'Arjan Dhillon',
        src: 'audio/6.mp3',
        cover: 'img/6.jpg'
    },
    {
        id: '7',
        title: 'King Shit',
        artist:'Shubh',
        src: 'audio/7.mp3',
        cover: 'img/7.jpg'
    },
    {
        id: '8',
        title: 'Dead Zone',
        artist: 'Gulab Sidhu',
        src: 'audio/8.mp3',
        cover: 'img/8.jpg'
    },
    {
        id: '9',
        title: 'Chal Jindiye',
        artist: 'Amnider Gill',
        src: 'audio/9.mp3',
        cover: 'img/9.jpg'
    },
    {
        id: '10',
        title: 'Regrat',
        artist: 'Sidhu Moose wala',
        src: 'audio/10.mp3',
        cover: 'img/10.jpg'
    },
    {
        id: '11',
        title: 'Maa Boldi Aa',
        artist: 'Karan Aujla',
        src: 'audio/11.mp3',
        cover: 'img/11.jpg'
    },
    {
        id: '12',
        title: 'Nightmare',
        artist: 'Chandra Brar',
        src: 'audio/12.mp3',
        cover: 'img/12.jpg'
    },
    {
        id: '13',
        title: 'All Eyez on Me',
        artist: '2Pac',
        src: 'audio/13.mp3',
        cover: 'img/13.jpg'
    },
    {
        id: '14',
        title: 'Hope',
        artist: 'XXTentacion',
        src: 'audio/14.mp3',
        cover: 'img/14.jpg'
    },
    {
        id: '15',
        title: 'Levels',
        artist: 'Sidhu Moose wala',
        src: 'audio/15.mp3',
        cover: 'img/15.jpg'
    },
    {
        id: '16',
        title: 'Blue Eyes',
        artist: 'Yo Yo Honey Singh',
        src: 'audio/16.mp3',
        cover: 'img/16.jpg'
    },
    {
        id: '17',
        title: 'Ki Banu Duniya Da',
        artist: 'Gurdas Maan',
        src: 'audio/17.mp3',
        cover: 'img/17.jpg'
    },
    {
        id: '18',
        title: 'Pani Deya Bul Buleya',
        artist: 'Chamkila',
        src: 'audio/18.mp3',
        cover: 'img/18.jpg'
    },
    {
        id: '19',
        title: 'Geet De Wargi',
        artist: 'Tarsem Jasser',
        src: 'audio/19.mp3',
        cover: 'img/19.jpg'
    },
    {
        id: '20',
        title: 'Dabde Ni',
        artist: 'Ammy Virk',
        src: 'audio/20.mp3',
        cover: 'img/20.jpg'
    },
    {
        id: '21',
        title: 'Unbothered',
        artist: 'Navaan Sandhu',
        src: 'audio/21.mp3',
        cover: 'img/21.jpg'
    },
    {
        id: '22',
        title: 'Red Battiyan',
        artist: 'R Nait',
        src: 'audio/22.mp3',
        cover: 'img/22.jpg'
    },
    {
        id: '23',
        title: 'Brown Munde',
        artist: 'AP Dhillon',
        src: 'audio/23.mp3',
        cover: 'img/23.jpg'
    },
    {
        id: '24',
        title: 'Fuck Em All',
        artist: 'Sidhu Moose Wala',
        src: 'audio/24.mp3',
        cover: 'img/24.jpg'
    },
    {
        id: '25',
        title: 'Case',
        artist: 'Diljit Dosanjh',
        src: 'audio/25.mp3',
        cover: 'img/25.jpg'
    },
    {
        id: '26',
        title: 'Scapegoat',
        artist: 'Sidhu Moose Wala ',
        src: 'audio/26.mp3',
        cover: 'img/26.jpg'
    },
    {
        id: '27',
        title: 'Never Fold',
        artist: 'Sidhu Moose Wala',
        src: 'audio/27.mp3',
        cover: 'img/27.jpg'
    },
    {
        id: '28',
        title: 'Chote Chote Ghar',
        artist: 'Ranjit Bawa',
        src: 'audio/28.mp3',
        cover: 'img/28.jpg'
    },
    {
        id: '29',
        title: 'Pendu',
        artist: 'Amnider Gill',
        src: 'audio/29.mp3',
        cover: 'img/29.jpg'
    },
    {
        id: '30',
        title: 'Kaun Kuri',
        artist: 'KS Makhan',
        src: 'audio/30.mp3',
        cover: 'img/30.jpg'
    },
    {
        id: '31',
        title: 'Good Luck Charm',
        artist: 'KS Makhan',
        src: 'audio/31.mp3',
        cover: 'img/31.jpg'
    },
    {
        id: '32',
        title: 'Bachke Bachke',
        artist: 'Karan Aujla',
        src: 'audio/32.mp3',
        cover: 'img/32.jpg'
    },
    {
        id: '33',
        title: 'Love Sick',
        artist: 'Sidhu Moose Wala',
        src: 'audio/33.mp3',
        cover: 'img/33.jpg'
    },
    {
        id: '34',
        title: 'Jatt Life',
        artist: 'Varinder Brar',
        src: 'audio/34.mp3',
        cover: 'img/34.jpg'
    },
    {
        id: '35',
        title: 'Foreigns',
        artist: 'AP Dhillion',
        src: 'audio/35.mp3',
        cover: 'img/35.jpg'
    },
    {
        id: '36',
        title: 'Built Different',
        artist: 'Sidhu Moose Wala',
        src: 'audio/36.mp3',
        cover: 'img/36.jpg'
    },
    {
        id: '37',
        title: 'Racks And Rounds',
        artist: 'Sidhu Moose Wala',
        src: 'audio/37.mp3',
        cover: 'img/37.jpg'
    },
    {
        id: '38',
        title: 'Goat',
        artist: 'AP Dhillion',
        src: 'audio/38.mp3',
        cover: 'img/38.jpg'
    },
    {
        id: '39',
        title: 'Jaguar',
        artist: 'Bohemia',
        src: 'audio/39.mp3',
        cover: 'img/39.webp'
    },
    {
        id: '40',
        title: 'Car Nachdi',
        artist: 'Gippy Grewal ',
        src: 'audio/40.mp3',
        cover: 'img/40.jpg'
    },
    {
        id: '41',
        title: 'I M Better Now',
        artist: 'Sidhu Moose Wala',
        src: 'audio/41.mp3',
        cover: 'img/41.jpg'
    },
    {
        id: '42',
        title: 'Same Beef',
        artist: 'Sidhu Moose Wala ',
        src: 'audio/42.mp3',
        cover: 'img/42.jpg'
    },
    {
        id: '43',
        title: 'Pagol',
        artist: 'Deep Jandu',
        src: 'audio/43.mp3',
        cover: 'img/43.jpg'
    },
    {
        id: '44',
        title: '2 Number',
        artist: 'Deep Jandu',
        src: 'audio/44.mp3',
        cover: 'img/44.jpg'
    },
   
];

let state = {
    index: 0,
    isPlaying: false,
    isSeeking: false,
    shuffle: loadBool(STORAGE_KEYS.SHUFFLE, false),
    repeat: loadBool(STORAGE_KEYS.REPEAT, false),
    favorites: loadJSON(STORAGE_KEYS.FAVORITES, []),
    recents: loadJSON(STORAGE_KEYS.RECENTS, []),
    view: localStorage.getItem(STORAGE_KEYS.VIEW) || 'all', 
    filter: ''
};

function loadJSON(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback)); }
    catch { return fallback; }
}
function saveJSON(key, val) { localStorage.setItem(key, JSON.stringify(val)); }
function loadBool(key, fallback) { return localStorage.getItem(key) ? localStorage.getItem(key) === 'true' : fallback; }

function formatTime(s) {
    if (isNaN(s) || s === Infinity) return '0:00';
    const m = Math.floor(s / 60);
    const ss = Math.floor(s % 60).toString().padStart(2, '0');
    return `${m}:${ss}`;
}

// --- Initialize persisted stuff
(function init() {
    const lastIndex = parseInt(localStorage.getItem(STORAGE_KEYS.LAST_INDEX), 10);
    state.index = Number.isInteger(lastIndex) ? clamp(lastIndex, 0, TRACKS.length - 1) : 0;

    const lastVol = parseFloat(localStorage.getItem(STORAGE_KEYS.VOLUME));
    audio.volume = Number.isFinite(lastVol) ? lastVol : 0.8;
    volumeEl.value = audio.volume;

    const lastMuted = localStorage.getItem(STORAGE_KEYS.MUTED) === 'true';
    audio.muted = lastMuted;
    muteBtn.textContent = audio.muted ? '🔇' : '🔊';

    tabs.forEach(b => b.classList.toggle('active', b.dataset.view === state.view));
})();

function clamp(n, min, max) { return Math.min(Math.max(n, min), max); }

function setTrack(i) {
    state.index = clamp(i, 0, TRACKS.length - 1);
    const track = TRACKS[state.index];
    audio.src = track.src;
    coverEl.src = track.cover;
    coverEl.alt = `${track.title} — ${track.artist}`;
    titleEl.textContent = track.title;
    artistEl.textContent = track.artist;
    highlightActive();
    localStorage.setItem(STORAGE_KEYS.LAST_INDEX, state.index);
}

function highlightActive() {
    [...playlistEl.querySelectorAll('.track')].forEach((el, idx) => {
        el.classList.toggle('active', idx === state.index);
    });
}

function renderPlaylist() {
    const view = state.view;
    const filt = state.filter.toLowerCase();

    let items = TRACKS.map(t => t);
    if (view === 'favorites') {
        items = items.filter(t => state.favorites.includes(t.id));
    } else if (view === 'recent') {
        items = state.recents
            .map(id => TRACKS.find(t => t.id === id))
            .filter(Boolean);
    }

    if (filt) {
        items = items.filter(t =>
            t.title.toLowerCase().includes(filt) ||
            t.artist.toLowerCase().includes(filt)
        );
    }

    playlistEl.innerHTML = '';
    items.forEach((t) => {
        const idx = TRACKS.findIndex(x => x.id === t.id);

        const li = document.createElement('li');
        li.className = 'track';
        li.dataset.id = t.id;
        li.innerHTML = `
      <img class="cover" src="${t.cover}" alt="">
      <div>
        <div class="t-title">${t.title}</div>
        <div class="t-artist">${t.artist}</div>
      </div>
      <div class="t-time" data-time="--:--">--:--</div>
    `;
        li.addEventListener('click', () => {
            setTrack(idx);
            play();
        });
        playlistEl.appendChild(li);

        // preload duration meta
        getDuration(t.src).then(d => {
            const timeEl = li.querySelector('.t-time');
            timeEl.textContent = formatTime(d);
            timeEl.dataset.time = d;
        });
    });

    highlightActive();
}

function getDuration(src) {
    return new Promise((resolve) => {
        const a = new Audio();
        a.preload = 'metadata';
        a.src = src;
        a.addEventListener('loadedmetadata', () => {
            resolve(a.duration || 0);
            a.src = ''; // cleanup
        });
        a.addEventListener('error', () => resolve(0));
    });
}


function play() {
    wavesContainer.classList.add('active'); // Show waves when playing
    audio.play().then(() => {
        state.isPlaying = true;
        playPauseBtn.innerHTML = '<i class="bi bi-pause-fill"></i>';
        pushRecent(TRACKS[state.index].id);
    }).catch(err => {
        console.warn('Autoplay blocked or error:', err);
    });
}
function pause() {
    wavesContainer.classList.remove('active'); // Hide waves when paused
    audio.pause();
    state.isPlaying = false;
    playPauseBtn.innerHTML = '<i class="bi bi-play-fill"></i>';
}


function next() {
    if (state.shuffle) {
        const choices = TRACKS.map((_, i) => i).filter(i => i !== state.index);
        const r = choices[Math.floor(Math.random() * choices.length)];
        setTrack(r);
    } else {
        setTrack((state.index + 1) % TRACKS.length);
    }
    play();
}
function prev() {
    setTrack((state.index - 1 + TRACKS.length) % TRACKS.length);
    play();
}

function toggleShuffle() {
    state.shuffle = !state.shuffle;
    shuffleBtn.classList.toggle('active', state.shuffle);
    localStorage.setItem(STORAGE_KEYS.SHUFFLE, state.shuffle);
}
function toggleRepeat() {
    state.repeat = !state.repeat; // only toggle between true/false
    repeatBtn.classList.toggle('active', state.repeat);
    localStorage.setItem(STORAGE_KEYS.REPEAT, state.repeat);

    if (state.repeat) {
        repeatBtn.innerHTML = '<i class="bi bi-repeat-1"></i>'; // Repeat One
    } else {
        repeatBtn.innerHTML = '<i class="bi bi-repeat"></i>';   // Repeat Off
    }
}



function toggleLike() {
    const id = TRACKS[state.index].id;
    const i = state.favorites.indexOf(id);
    if (i === -1) state.favorites.push(id);
    else state.favorites.splice(i, 1);
    saveJSON(STORAGE_KEYS.FAVORITES, state.favorites);
    updateLikeButton();
    renderPlaylist();
}
function updateLikeButton() {
    const id = TRACKS[state.index].id;
    likeBtn.classList.toggle('active', state.favorites.includes(id));
}

function pushRecent(id) {
    const arr = state.recents.filter(x => x !== id);
    arr.unshift(id);
    state.recents = arr.slice(0, 20);
    saveJSON(STORAGE_KEYS.RECENTS, state.recents);
}

function setView(view) {
    state.view = view;
    localStorage.setItem(STORAGE_KEYS.VIEW, view);
    tabs.forEach(b => b.classList.toggle('active', b.dataset.view === view));
    renderPlaylist();
}

// --- Event wiring
playPauseBtn.addEventListener('click', () => state.isPlaying ? pause() : play());
nextBtn.addEventListener('click', next);
prevBtn.addEventListener('click', prev);
shuffleBtn.addEventListener('click', toggleShuffle);
repeatBtn.addEventListener('click', toggleRepeat);
likeBtn.addEventListener('click', toggleLike);

searchInput.addEventListener('input', (e) => {
    state.filter = e.target.value;
    renderPlaylist();
});

seekEl.addEventListener('input', () => {
    state.isSeeking = true;
    const pct = parseFloat(seekEl.value) / 100;
    const dur = audio.duration || 0;
    currentTimeEl.textContent = formatTime(dur * pct);
});
seekEl.addEventListener('change', () => {
    const pct = parseFloat(seekEl.value) / 100;
    audio.currentTime = (audio.duration || 0) * pct;
    state.isSeeking = false;
});

volumeEl.addEventListener('input', () => {
    audio.volume = parseFloat(volumeEl.value);
    localStorage.setItem(STORAGE_KEYS.VOLUME, audio.volume);
    if (audio.volume === 0) { audio.muted = true; }
    updateMuteIcon();
});
muteBtn.addEventListener('click', () => {
    audio.muted = !audio.muted;
    localStorage.setItem(STORAGE_KEYS.MUTED, audio.muted);
    updateMuteIcon();
});
function updateMuteIcon() {
    muteBtn.textContent = audio.muted || audio.volume === 0 ? '🔇' : '🔊';
}

audio.addEventListener('timeupdate', () => {
    if (!state.isSeeking) {
        seekEl.value = (audio.currentTime / (audio.duration || 1)) * 100;
        currentTimeEl.textContent = formatTime(audio.currentTime);
    }
});
audio.addEventListener('loadedmetadata', () => {
    totalTimeEl.textContent = formatTime(audio.duration);
});
audio.addEventListener('ended', () => {
    if (state.repeat) {
        audio.currentTime = 0;
        play();
    } else {
        next();
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    const tag = document.activeElement?.tagName?.toLowerCase();
    if (tag === 'input' || tag === 'textarea') return;

    if (e.code === 'Space') { e.preventDefault(); state.isPlaying ? pause() : play(); }
    else if (e.key === 'ArrowRight') { next(); }
    else if (e.key === 'ArrowLeft') { prev(); }
    else if (e.key.toLowerCase() === 's') { toggleShuffle(); }
    else if (e.key.toLowerCase() === 'r') { toggleRepeat(); }
    else if (e.key.toLowerCase() === 'f') { toggleLike(); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); volumeEl.value = Math.min(1, parseFloat(volumeEl.value) + 0.05); volumeEl.dispatchEvent(new Event('input')); }
    else if (e.key === 'ArrowDown') { e.preventDefault(); volumeEl.value = Math.max(0, parseFloat(volumeEl.value) - 0.05); volumeEl.dispatchEvent(new Event('input')); }
});

// Menu toggle functionality
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    sidebar.classList.toggle('active');
});

// Close menu when clicking outside on mobile
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 900 && 
        sidebar.classList.contains('active') &&
        !sidebar.contains(e.target) &&
        !menuToggle.contains(e.target)) {
        menuToggle.classList.remove('active');
        sidebar.classList.remove('active');
    }
});

// Tab switching
tabs.forEach(b => {
    b.addEventListener('click', () => setView(b.dataset.view));
});

// --- Boot
renderPlaylist();
setTrack(state.index);
updateLikeButton();
shuffleBtn.classList.toggle('active', state.shuffle);
repeatBtn.classList.toggle('active', state.repeat);

