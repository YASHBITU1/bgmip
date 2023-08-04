const hadiah = {
    0: 'img/reward/1.png',
    1: 'img/reward/2.png',
    2: 'img/reward/3.png',
    3: 'img/reward/4.png',
    4: 'img/reward/5.png',
    5: 'img/reward/6.png',
    6: 'img/reward/7a.png',
    7: 'img/reward/8.png',
    8: 'img/reward/9.png',
};

const jumlah_hadiah = 9;
const minimal_lompat = 30;
let kinnonsec = -1;
let lompat = 0;
let kecepatan = 30;
let waktu = 0;
let hadiahnya = -1;

function putarkan() {
    $(`[data-order="${kinnonsec}"]`).removeClass('border_hadiah');

    kinnonsec += 1;

    if (kinnonsec > jumlah_hadiah - 1) {
        kinnonsec = 0;
    }
    $(`[data-order="${kinnonsec}"]`).addClass('border_hadiah');

}

function acakHadiah() {
    return Math.floor(Math.random() * jumlah_hadiah);
}

function pengaturanWaktu() {
    lompat += 1;
    putarkan();
    if (lompat > minimal_lompat + 9 && hadiahnya === kinnonsec) {
        clearTimeout(waktu);

        $('.itemReward_confirmation').fadeIn('slow');
        $('.gift_img').attr('src', hadiah[kinnonsec]);
        setTimeout(function() {}, 0);

        hadiahnya = -1;
        lompat = 0;

    } else {
        if (lompat < minimal_lompat) {
            kecepatan -= 8;
        } else if (lompat === minimal_lompat) {
            const nomor_acak = acakHadiah();
            hadiahnya = nomor_acak;
        } else {
            if ((lompat > minimal_lompat + 10) && hadiahnya === kinnonsec) {
                kecepatan += 600;
            } else {
                kecepatan += 20;
            }
        }
        if (kecepatan < 40) {
            kecepatan = 40;
        }
        waktu = setTimeout(pengaturanWaktu, kecepatan);

    }
}

function gaskeun() {
    lompat = 0;
    kecepatan = 70;
    hadiahnya = -1;
    pengaturanWaktu();
}

$(document).ready(() => {
    $('.putarkan').on('click', gaskeun);
});