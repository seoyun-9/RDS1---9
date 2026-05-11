  const metadata = [
    { title: "Doll face", url: "https://www.youtube.com/watch?v=zl6hNj1uOkY", date: "2007. 2. 19", runtime: "04분 12초", timecode: "00분 12초 - 18초", freeze: "6s", genre: "숏필름", subject: "인물(기계)", shotsize: "CU", sound: "X" }, // photo1
    { title: "Doll face", url: "https://www.youtube.com/watch?v=zl6hNj1uOkY", date: "2007. 2. 19", runtime: "04분 12초", timecode: "00분 23초 - 26초", freeze: "3s", genre: "숏필름", subject: "기계", shotsize: "", sound: "X" }, // photo2
    { title: "Doll face", url: "https://www.youtube.com/watch?v=zl6hNj1uOkY", date: "2007. 2. 19", runtime: "04분 12초", timecode: "00분 36초 - 37초", freeze: "1s", genre: "숏필름", subject: "기계", shotsize: "CU", sound: "X" }, // photo3
    { title: "Doll face", url: "https://www.youtube.com/watch?v=zl6hNj1uOkY", date: "2007. 2. 19", runtime: "04분 12초", timecode: "00분 40초 - 41초", freeze: "1s", genre: "숏필름", subject: "기계", shotsize: "", sound: "X" }, // photo4
    { title: "Doll face", url: "https://www.youtube.com/watch?v=zl6hNj1uOkY", date: "2007. 2. 19", runtime: "04분 12초", timecode: "03분 19초 - 21초", freeze: "2s", genre: "숏필름", subject: "기계", shotsize: "ECU", sound: "X" }, // photo5
    { title: "rich man", url: "https://www.youtube.com/watch?v=5oQVTnq-UKk", date: "2025. 9. 5", runtime: "03분 29초", timecode: "00분 23초 - 24초", freeze: "1s", genre: "뮤비", subject: "인물", shotsize: "CU", sound: "X" }, // photo6
    { title: "lights out", url: "https://www.youtube.com/watch?v=cunM7ie61QA", date: "2021. 4. 9", runtime: "02분 34초", timecode: "00분 53초 - 55초", freeze: "2s", genre: "홀러필름", subject: "공간", shotsize: "MS", sound: "X" }, // photo7
    { title: "이브, 프시케 그리고 푸른수염의 아내", url: "https://www.youtube.com/watch?v=dZs_cLHfnNA", date: "2023. 5. 23", runtime: "03분 47초", timecode: "00분 15초 - 16초", freeze: "1s", genre: "뮤비", subject: "인물", shotsize: "LS", sound: "X" }, // photo8
    { title: "cool with you", url: "https://www.youtube.com/watch?v=zsYSSVoQnP4", date: "2023. 7. 20", runtime: "03분 59초", timecode: "00분 58초 - 59초", freeze: "1s", genre: "뮤비", subject: "인물", shotsize: "MLS", sound: "X" }, // photo9
    { title: "아이브 트레일러", url: "https://www.youtube.com/watch?v=_6Zvxj0s7SE", date: "2025. 8. 8", runtime: "01분 43초", timecode: "00분 43초 - 44초", freeze: "1s", genre: "트레일러", subject: "인물", shotsize: "CU", sound: "O" }, // photo10
    { title: "Billie Eilish, Khalid - lovely", url: "https://www.youtube.com/watch?v=V1Pl8CzNzCw", date: "2018. 4. 27", runtime: "03분 20초", timecode: "00분 23초 - 25초", freeze: "2s", genre: "뮤비", subject: "인물", shotsize: "MCU", sound: "X" }, // photo11
    { title: "비비드라라러브", url: "https://www.youtube.com/watch?v=bMrwm7TXWAo", date: "2025. 7. 14", runtime: "04분 00초", timecode: "02분 46초 - 48초", freeze: "2s", genre: "뮤비", subject: "인물", shotsize: "MS", sound: "X" }, // photo12
    { title: "아일릿 브랜드필름", url: "https://www.youtube.com/watch?v=LVEDH6Z7jfI", date: "2024. 3. 4", runtime: "03분 28초", timecode: "00분 40초 - 42초", freeze: "2s", genre: "트레일러", subject: "인물", shotsize: "LS", sound: "O" }, // photo13
    { title: "richman 에고편", url: "https://www.youtube.com/watch?v=7aQ2uxgJbnY", date: "2025. 8. 25", runtime: "05분 59초", timecode: "02분 13초 - 14초", freeze: "1s", genre: "트레일러", subject: "인물", shotsize: "CU", sound: "X" }, // photo14
    { title: "richman 에고편", url: "https://www.youtube.com/watch?v=7aQ2uxgJbnY", date: "2025. 8. 25", runtime: "05분 59초", timecode: "03분 45초 - 46초", freeze: "1s", genre: "트레일러", subject: "소품", shotsize: "CU", sound: "X" }, // photo15
    { title: "TAMBURINS x JENNIE PERFUME", url: "https://www.youtube.com/watch?v=JuB3diykmFs", date: "2022. 9. 23", runtime: "05분 58초", timecode: "00분 13초 - 14초", freeze: "1s", genre: "브랜드필름", subject: "인물", shotsize: "ELS", sound: "X" }, // photo16
    { title: "TAMBURINS x JENNIE PERFUME", url: "https://www.youtube.com/watch?v=JuB3diykmFs", date: "2022. 9. 23", runtime: "05분 58초", timecode: "00분 15초 - 17초", freeze: "2s", genre: "브랜드필름", subject: "인물", shotsize: "MCU", sound: "X" }, // photo17
    { title: "TAMBURINS x JENNIE PERFUME", url: "https://www.youtube.com/watch?v=JuB3diykmFs", date: "2022. 9. 23", runtime: "05분 58초", timecode: "00분 18초 - 19초", freeze: "1s", genre: "브랜드필름", subject: "공간", shotsize: "MS", sound: "X" }, // photo18
    { title: "베리시 브랜드필름", url: "https://www.youtube.com/watch?v=Is8B8FxfwQA", date: "2025. 6. 13", runtime: "02분 34초", timecode: "01분 01초 - 02초", freeze: "1s", genre: "브랜드필름", subject: "구두", shotsize: "CU", sound: "X" }, // photo19
    { title: "2 AM COFFEE", url: "https://www.youtube.com/watch?v=SR__amDl1c8", date: "2023. 10. 17", runtime: "01분 49초", timecode: "00분 05초 - 07초", freeze: "2s", genre: "숏필름", subject: "공간", shotsize: "LS", sound: "X" }, // photo20
    { title: "Chasing The Storm", url: "https://www.youtube.com/watch?v=W5RecEKidds", date: "2024. 4. 6", runtime: "02분 00초", timecode: "00분 46초 - 48초", freeze: "2s", genre: "숏필름", subject: "인물", shotsize: "LS", sound: "X" }, // photo21
    { title: "UNSAVED", url: "https://www.youtube.com/watch?v=1VHEEHwnEAk", date: "2025. 8. 15", runtime: "03분 58초", timecode: "01분 41초 - 43초", freeze: "2s", genre: "숏필름", subject: "전화기", shotsize: "CU", sound: "X" }, // photo22
    { title: "The Loop", url: "https://www.youtube.com/watch?v=thpF81-wrMs", date: "2024. 4. 28", runtime: "05분 17초", timecode: "02분 56초 - 58초", freeze: "2s", genre: "숏필름", subject: "인물", shotsize: "ECU", sound: "X" }, // photo23
    { title: "The Loop", url: "https://www.youtube.com/watch?v=thpF81-wrMs", date: "2024. 4. 28", runtime: "05분 17초", timecode: "03분 33초 - 34초", freeze: "1s", genre: "숏필름", subject: "인물", shotsize: "ECU", sound: "O" }, // photo24
    { title: "art is dead", url: "https://www.youtube.com/watch?v=ll7lnv_FHgk", date: "2023. 2. 25", runtime: "02분 20초", timecode: "00분 58초 - 01분 05초", freeze: "7s", genre: "숏필름", subject: "인물", shotsize: "LS", sound: "X" }, // photo25
    { title: "art is dead", url: "https://www.youtube.com/watch?v=ll7lnv_FHgk", date: "2023. 2. 25", runtime: "02분 20초", timecode: "02분 08초 - 09초", freeze: "1s", genre: "숏필름", subject: "인물", shotsize: "LS", sound: "X" }, // photo26
    { title: "good memories", url: "https://www.youtube.com/watch?v=xf_06mmx5nM", date: "2022. 2. 10", runtime: "02분 1초", timecode: "00분 52초 - 54초", freeze: "2s", genre: "숏필름", subject: "인물", shotsize: "LS", sound: "X" }, // photo27
    { title: "good memories", url: "https://www.youtube.com/watch?v=xf_06mmx5nM", date: "2022. 2. 10", runtime: "02분 1초", timecode: "01분 07초 - 08초", freeze: "1s", genre: "숏필름", subject: "인물", shotsize: "MLS", sound: "X" }, // photo28
    { title: "MANSPREAD", url: "https://www.youtube.com/watch?v=nN4CLoP89HQ", date: "2024. 12. 21", runtime: "06분 29초", timecode: "02분 54초 - 55초", freeze: "1s", genre: "숏필름", subject: "인물", shotsize: "LS", sound: "X" }, // photo29
    { title: "Sottopelle", url: "https://www.youtube.com/watch?v=4Pj0Ea041OI", date: "2025. 9. 24", runtime: "02분 47초", timecode: "01분 02초 - 03초", freeze: "1s", genre: "숏필름", subject: "인물", shotsize: "LS", sound: "O" }, // photo30
    { title: "EQUILIBRIUM", url: "https://www.youtube.com/watch?v=sIluLSWlyl4", date: "2021. 6. 1", runtime: "02분 38초", timecode: "01분 38초 - 41초", freeze: "3s", genre: "숏필름", subject: "인물", shotsize: "MCU", sound: "X" }, // photo31
    { title: "Shame (The Color of Pomegranates)", url: "https://www.youtube.com/watch?v=wGbcwpKjq8Y", date: "2019. 5. 13", runtime: "02분 03초", timecode: "01분 06초 - 07초", freeze: "1s", genre: "숏필름", subject: "인물", shotsize: "MCU", sound: "X" }, // photo32
    { title: "Shame (The Color of Pomegranates)", url: "https://www.youtube.com/watch?v=wGbcwpKjq8Y", date: "2019. 5. 13", runtime: "02분 03초", timecode: "01분 40초 - 42초", freeze: "2s", genre: "숏필름", subject: "인물", shotsize: "ELS", sound: "X" }, // photo33
    { title: "Double Vision", url: "https://www.youtube.com/watch?v=OFYDiMe8wSo", date: "2024. 11. 5", runtime: "05분 02초", timecode: "00분 37초 - 39초", freeze: "2s", genre: "홀러필름", subject: "공간", shotsize: "ECU", sound: "X" }, // photo34
    { title: "Double Vision", url: "https://www.youtube.com/watch?v=OFYDiMe8wSo", date: "2024. 11. 5", runtime: "05분 02초", timecode: "00분 42초 - 45초", freeze: "3s", genre: "홀러필름", subject: "과자", shotsize: "ECU", sound: "X" }, // photo35
    { title: "Double Vision", url: "https://www.youtube.com/watch?v=OFYDiMe8wSo", date: "2024. 11. 5", runtime: "05분 02초", timecode: "01분 13초 - 17초", freeze: "4s", genre: "홀러필름", subject: "공간", shotsize: "ELS", sound: "X" }, // photo36
    { title: "Double Vision", url: "https://www.youtube.com/watch?v=OFYDiMe8wSo", date: "2024. 11. 5", runtime: "05분 02초", timecode: "02분 00초 - 02초", freeze: "2s", genre: "홀러필름", subject: "신발", shotsize: "CU", sound: "X" }, // photo37
    { title: "Double Vision", url: "https://www.youtube.com/watch?v=OFYDiMe8wSo", date: "2024. 11. 5", runtime: "05분 02초", timecode: "02분 13초 - 15초", freeze: "2s", genre: "홀러필름", subject: "인물", shotsize: "MS", sound: "X" }, // photo38
    { title: "Double Vision", url: "https://www.youtube.com/watch?v=OFYDiMe8wSo", date: "2024. 11. 5", runtime: "05분 02초", timecode: "03분 43초 - 46초", freeze: "3s", genre: "홀러필름", subject: "공간,인물", shotsize: "LS", sound: "X" }, // photo39
    { title: "peephole", url: "https://www.youtube.com/watch?v=dKcOTr7N4lE", date: "2018. 1. 27", runtime: "03분 42초", timecode: "00분 45초 - 46초", freeze: "1s", genre: "홀러필름", subject: "인물", shotsize: "LS", sound: "X" }, // photo40
    { title: "peephole", url: "https://www.youtube.com/watch?v=dKcOTr7N4lE", date: "2018. 1. 27", runtime: "03분 42초", timecode: "01분 05초 - 06초", freeze: "1s", genre: "홀러필름", subject: "인물", shotsize: "LS", sound: "X" }, // photo41
    { title: "clap clap", url: "https://www.youtube.com/watch?v=mPtCeemqdE0", date: "2017. 7. 1", runtime: "05분 18초", timecode: "02분 25초 - 27초", freeze: "2s", genre: "홀러필름", subject: "발음", shotsize: "LS", sound: "X" }, // photo42
    { title: "clap clap", url: "https://www.youtube.com/watch?v=mPtCeemqdE0", date: "2017. 7. 1", runtime: "05분 18초", timecode: "02분 28초 - 30초", freeze: "2s", genre: "홀러필름", subject: "소파", shotsize: "LS", sound: "X" }, // photo43
    { title: "the changing room", url: "https://www.youtube.com/watch?v=SdS15vKWsHo", date: "2022. 6. 10", runtime: "04분 25초", timecode: "00분 53초 - 36초", freeze: "1s", genre: "홀러필름", subject: "공간", shotsize: "MLS", sound: "X" }, // photo44
    { title: "plastic", url: "https://www.youtube.com/watch?v=M3BoeUXOXGA", date: "2016. 1. 6", runtime: "07분 27초", timecode: "01분 49초 - 50초", freeze: "1s", genre: "숏필름", subject: "공간,시계", shotsize: "MS", sound: "X" }, // photo45
    { title: "plastic", url: "https://www.youtube.com/watch?v=M3BoeUXOXGA", date: "2016. 1. 6", runtime: "07분 27초", timecode: "05분 18초 - 19초", freeze: "2s", genre: "숏필름", subject: "공간", shotsize: "MS", sound: "X" }, // photo46
    { title: "데레", url: "https://www.youtube.com/watch?v=m6N6jOt7heY", date: "2024. 11. 14", runtime: "04분 03초", timecode: "00분 42초 - 44초", freeze: "2s", genre: "뮤비", subject: "인물", shotsize: "ECU", sound: "X" }, // photo47
    { title: "데레", url: "https://www.youtube.com/watch?v=m6N6jOt7heY", date: "2024. 11. 14", runtime: "04분 03초", timecode: "00분 50초 - 52초", freeze: "2s", genre: "뮤비", subject: "인물", shotsize: "CU", sound: "X" }, // photo48
    { title: "come over", url: "https://www.youtube.com/watch?v=z_uqieM8VGM", date: "2025. 3. 30", runtime: "03분 27초", timecode: "00분 10초 - 11초", freeze: "1s", genre: "뮤비", subject: "인물", shotsize: "CU", sound: "X" }, // photo49
    { title: "SALT Fashion Film", url: "https://www.youtube.com/watch?v=YclXe8EiSDw", date: "2024. 11. 1", runtime: "04분 20초", timecode: "00분 37초 - 38초", freeze: "1s", genre: "패션필름", subject: "인물", shotsize: "MCU", sound: "X" }, // photo50
];

document.addEventListener('DOMContentLoaded', () => {
    const slots = document.querySelectorAll('.image-slot');
    const duration = 5000;
    const timerSize = 60;
    const timerBottom = 80;
    const maxMoveY = window.innerHeight - timerBottom - timerSize - 20;

    if (sessionStorage.getItem('visited')) {
        const triangle = document.createElement('div');
        triangle.style.cssText = `
            position: fixed;
            bottom: 80px;
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 0;
            border-top: 25px solid transparent;
            border-bottom: 25px solid transparent;
            border-left: 43px solid #FF0090;
            z-index: 9999;
        `;
        document.body.appendChild(triangle);
        return;
    }
    sessionStorage.setItem('visited', 'true');

    const timerCanvas = document.createElement('canvas');
    timerCanvas.width = timerSize;
    timerCanvas.height = timerSize;
    timerCanvas.style.cssText = `
        position: fixed;
        bottom: ${timerBottom}px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 9999;
    `;
    document.body.appendChild(timerCanvas);
    const tCtx = timerCanvas.getContext('2d');
    const startTime = Date.now();

    function drawTimer() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const cx = timerSize / 2;
        const cy = timerSize / 2;
        const r = cx - 4;
        tCtx.clearRect(0, 0, timerSize, timerSize);
        tCtx.beginPath();
        tCtx.arc(cx, cy, r, 0, Math.PI * 2);
        tCtx.strokeStyle = '#333';
        tCtx.lineWidth = 3;
        tCtx.stroke();
        tCtx.beginPath();
        tCtx.arc(cx, cy, r, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * (1 - progress));
        tCtx.strokeStyle = '#FF0090';
        tCtx.lineWidth = 3;
        tCtx.stroke();
        if (progress < 1) requestAnimationFrame(drawTimer);
    }
    drawTimer();

    slots.forEach(slot => {
        const randX = (Math.random() - 0.5) * window.innerWidth;
        const randY = (Math.random() - 0.5) * maxMoveY;
        slot.style.transition = 'transform 1.5s ease';
        slot.style.transform = `translate(${randX}px, ${randY}px)`;

        const interval = setInterval(() => {
            const x = (Math.random() - 0.5) * window.innerWidth;
            const y = (Math.random() - 0.5) * maxMoveY;
            slot.style.transition = 'transform 1.5s ease';
            slot.style.transform = `translate(${x}px, ${y}px)`;
        }, 1500);

        setTimeout(() => {
            clearInterval(interval);
            slot.style.transition = 'transform 1.5s ease';
            slot.style.transform = 'translate(0, 0)';
            setTimeout(() => {
                slot.style.transition = '';
                slot.style.transform = '';
                slot.style.zIndex = '';
            }, 1500);
        }, duration);
    });

    setTimeout(() => {
        timerCanvas.style.display = 'none';
        const triangle = document.createElement('div');
        triangle.style.cssText = `
            position: fixed;
            bottom: ${timerBottom}px;
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 0;
            border-top: 25px solid transparent;
            border-bottom: 25px solid transparent;
            border-left: 43px solid #FF0090;
            z-index: 9999;
        `;
        document.body.appendChild(triangle);
    }, duration + 100);
});

window.onload = () => {
    const slots = Array.from(document.querySelectorAll('.image-slot'));
    const columns = 10;
    const maxOffsets = new Array(slots.length).fill(0);

    slots.forEach((slot, index) => {
        const handle = slot.querySelector('.handle');
        const tape = slot.querySelector('.image-tape');
        const imageUrl = tape.style.backgroundImage;
        const meta = metadata[index];

        let isDragging = false;
        let startY = 0;
        let handleOffset = 0;
        let mouseDownY = 0;

        const gap = 30;
        const maxLayers = parseInt(slot.getAttribute('data-max')) || 10;
        const maxOffset = maxLayers * gap;
        const layers = [];

        const popup = document.createElement('div');
        popup.className = 'meta-popup';
        popup.innerHTML = `
            <div class="meta-row"><span class="meta-label">영상 제목</span><span class="meta-value">${meta.title}</span></div>
            <div class="meta-row"><span class="meta-label">게시시점</span><span class="meta-value">${meta.date}</span></div>
            <div class="meta-row"><span class="meta-label">러닝 타임</span><span class="meta-value">${meta.runtime}</span></div>
            <div class="meta-row"><span class="meta-label">정지 타임코드</span><span class="meta-value">${meta.timecode}</span></div>
            <div class="meta-row"><span class="meta-label">정지 초수</span><span class="meta-value">${meta.freeze}</span></div>
            <div class="meta-row"><span class="meta-label">장르</span><span class="meta-value">${meta.genre}</span></div>
            <div class="meta-row"><span class="meta-label">정지 개체</span><span class="meta-value">${meta.subject}</span></div>
            <div class="meta-row"><span class="meta-label">샷사이즈</span><span class="meta-value">${meta.shotsize}</span></div>
            <div class="meta-row"><span class="meta-label">사운드 동기화 여부</span><span class="meta-value">${meta.sound}</span></div>
        `;
        popup.style.display = 'none';
        handle.appendChild(popup);

        let popupOpen = false;

        const getBelowSlots = () => {
            const below = [];
            let belowIndex = index + columns;
            while (belowIndex < slots.length) {
                below.push({ slot: slots[belowIndex], index: belowIndex });
                belowIndex += columns;
            }
            return below;
        };

        tape.addEventListener('dblclick', () => {
            sessionStorage.setItem('visited', 'true');
            const encodedUrl = encodeURIComponent(meta.url);
            window.location.href = `detail.html?photo=${index + 1}&url=${encodedUrl}`;
        });

        handle.addEventListener('mousedown', (e) => {
            isDragging = true;
            mouseDownY = e.clientY;
            startY = e.clientY - handleOffset;
            e.preventDefault();
        });

        window.addEventListener('mousemove', (e) => {
            if (!isDragging) return;

            const dragOffset = Math.max(0, Math.min(maxOffset, e.clientY - startY));
            handleOffset = dragOffset;

            const targetCount = Math.floor(dragOffset / gap);
            while (layers.length < targetCount) {
                const layer = document.createElement('div');
                layer.className = "image-tape overlay";
                layer.style.backgroundImage = imageUrl;
                layer.style.position = "absolute";
                layer.style.left = "0";
                layer.style.width = "100%";
                layer.style.height = "100%";
                layer.style.backgroundSize = "cover";
                layer.style.backgroundPosition = "center";
                layer.style.opacity = "0.5";
                layer.style.pointerEvents = "none";
                layer.style.top = `${(layers.length + 1) * gap}px`;
                layer.style.zIndex = layers.length;
                slot.appendChild(layer);
                layers.push(layer);
            }
            while (layers.length > targetCount) {
                const lastLayer = layers.pop();
                if (lastLayer) slot.removeChild(lastLayer);
            }

            handle.style.position = 'absolute';
// 맨 밑 삼각형 사라지기
const triangle = document.querySelector('body > div[style*="border-left"]');
if (triangle) triangle.style.display = 'none';
            handle.style.top = `calc(100% + ${dragOffset - 5}px)`;
            handle.style.bottom = 'auto';

           // mousemove 안에서
getBelowSlots().forEach(({ slot: belowSlot, index: belowIndex }) => {
    const newPos = maxOffsets[belowIndex] + dragOffset;
    belowSlot.style.position = 'relative';
    belowSlot.style.top = `${newPos}px`;
});
        });

        window.addEventListener('mouseup', (e) => {
            if (!isDragging) return;
            isDragging = false;

            if (Math.abs(e.clientY - mouseDownY) < 5) {
                popupOpen = !popupOpen;
                popup.style.display = popupOpen ? 'block' : 'none';
                handle.style.zIndex = popupOpen ? '99999' : '1000';
            }

            // 아래 슬롯 최대값 업데이트 후 고정
            // mouseup 안에서
getBelowSlots().forEach(({ slot: belowSlot, index: belowIndex }) => {
    maxOffsets[belowIndex] = Math.max(
        maxOffsets[belowIndex],
        parseFloat(belowSlot.style.top) || 0
    );
    belowSlot.style.top = `${maxOffsets[belowIndex]}px`;
});

            // 핸들 원래 위치로, handleOffset 유지
            handle.style.position = 'absolute';
            handle.style.top = `calc(100% + ${handleOffset - 5}px)`;
        });
    });
};