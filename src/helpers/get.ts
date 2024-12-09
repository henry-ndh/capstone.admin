// remove, can not access env in this wayyy
// process.env.TZ = 'Asia/Ho_Chi_Minh';
// import diachinh from 'config/diachinh.json';

export default class GET {
  /**
   * From code, return diachinh ...
   * @param _code
   */
  // getDiaChinh(_code: string): any {
  //     return new Promise((resolve, reject) => {
  //         if (!_code) return resolve(null);
  //         if (typeof diachinh[_code] !== 'undefined') {
  //             let R = diachinh[_code];
  //             return resolve({
  //                 "name": R.name,
  //                 "slug": R.slug,
  //                 "type": R.type,
  //                 "name_with_type": R.name_with_type,
  //                 "code": R.code,
  //             });
  //         };

  //         function _find(collection, key, value) {
  //             if (typeof collection !== 'object') return;
  //             for (let _key in collection) {
  //                 let R = collection[_key];
  //                 if (typeof R === 'object') {
  //                     if (typeof R[key] !== 'undefined' && R[key] === value) {
  //                         return resolve({
  //                             "name": R.name,
  //                             "slug": R.slug,
  //                             "type": R.type,
  //                             "name_with_type": R.name_with_type,
  //                             "code": R.code,
  //                         });
  //                     } else {
  //                         _find(R, key, value);
  //                     }
  //                 }
  //             }
  //         }
  //         _find(diachinh, 'code', _code);
  //     })

  // }

  /**
   * get Age from input
   * @param birthDateString String | timestamp
   * @param _append ' tuổi ...'
   * @returns
   */
  getAge(birthDateString: Date, _append: string): string | number {
    const today = new Date();
    const birthDate = birthDateString;

    const yearsDifference = today.getFullYear() - birthDate.getFullYear();

    const isBeforeBirthday =
      today.getMonth() < birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() < birthDate.getDate());

    return (
      (isBeforeBirthday ? yearsDifference - 1 : yearsDifference) +
      '' +
      (_append ? _append : '')
    );
  }

  /**
   * @_filename file name ...
   * @placeholder full URL of an placeholder
   * @return full media link or placeholder
   */
  getMediaLink(
    _filename: string = '',
    placeholder = 'https://placehold.co/600x400'
  ) {
    if (!_filename) return placeholder;

    let REACT_APP_AJAX_UPLOAD_PERMALINK =
      process.env.REACT_APP_AJAX_UPLOAD_PERMALINK;
    return REACT_APP_AJAX_UPLOAD_PERMALINK + '/' + _filename;
  }

  /* format 2 số 5 thành 05 */
  getPad = (n: string | number): string => {
    n = Number(n);
    if (n === 0) return '0';
    if (n < 10 && n > 0) return `0${n}`;
    return `` + n;
  };

  /*
   *	Trimmmm
   */
  getTrim = (s: any) => {
    return String(s || ' ').trim();
  };

  /**
   * Đếm độ dài của cả Unicode luôn!
   * @McJamBi  from Jamviet.com
   */
  getStringLength = (s: any) => {
    try {
      let Str = String(s || ' ');
      return [...Str].length;
    } catch (_) {
      return 0;
    }
  };

  /**
   * Check if passwords length enought and streng enought
   * you should take this password if it has strength point more than 2 and less than 5
   * @param _password
   */
  getPasswordStrength = (_password: string): number => {
    if (String(_password || ' ').trim().length < 6) return 0;
    let strength = 1;
    let password = String(_password || ' ');
    if (password.match(/[a-z]+/)) {
      strength += 1;
    }
    if (password.match(/[A-Z]+/)) {
      strength += 1;
    }
    if (password.match(/[0-9]+/)) {
      strength += 1;
    }
    if (password.match(/[$@#&!]+/)) {
      strength += 1;
    }
    return strength;
  };

  /**
   * Return context of Password Strength
   * @param strength max 5 min 0
   */
  getPasswordStrengthContext(strength: number) {
    switch (strength) {
      case 0:
        return 'password_too_weak';
      case 1:
        return 'password_too_weak';
      case 2:
        return 'password_medium_weak';
      case 3:
        return 'password_weak';
      case 4:
        return 'password_strength_ok';
      case 5:
        return 'password_strength_good';
    }
  }

  /**
   * Get random hash from char and Number
   * @param {*} XLength
   * @returns
   */
  getRandomHash = (XLength: number) => {
    var text = '';

    // Default is 10;
    var Length = XLength ? parseInt(`` + XLength) : 10;

    var possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < Length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return String(text);
  };

  /**
   * Get a random number only
   * @param {*} string_length Number
   * @returns String Random number
   */
  getRandomNumber = (string_length = 10): string => {
    var text = '';
    // Default is 10;
    var Length = string_length ? Number(string_length) : 10;
    var possible = '1234567890';
    for (var i = 0; i < Length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return String(text);
  };

  /**
   * get Random element in Array
   * @param myArray
   * @returns element
   */
  getRandomElementInArray(myArray: any[]) {
    return myArray[(Math.random() * myArray.length) | 0];
  }

  /**
   * Get random color ...
   * @param num number of hexa code you want
   * @returns HEXA
   */
  // getColorArray(num: number) {
  //     const result = [];
  //     for (let i = 0; i < num; i += 1) {
  //         const letters = '0123456789ABCDEF'.split('');
  //         let color = '#';
  //         for (let j = 0; j < 6; j += 1) {
  //             color += letters[Math.floor(Math.random() * 16)];
  //         }
  //         result.push(color);
  //     }
  //     return result;
  // };

  /**
   * MD5, auto generate if no string
   * @param {*} s
   * @returns MD5
   */

  /**
   * Sleep for a while, miniseconds
   * @param {*} ms
   * @returns
   */
  sleep = function (ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  /**
   * Cắt content ra thành độ dài mong muốn, thêm dấu 3 chấm vào cho oách!
   * @McJamBi  from                     Jamviet.com
   * @DateTime 2021-07-31T19:53:03+0700
   * (text): String, (maxLength): Number of string length
   */
  getTrimContent = (text: string, maxLength: number) => {
    var ellipsis = '...';
    text = String(text || ' ').trim();
    maxLength = isNaN(maxLength) ? 15 : parseInt(`` + maxLength);

    if (text.length > maxLength) {
      text = text.substring(0, maxLength - ellipsis.length);
      return text.substring(0, text.lastIndexOf(' ')) + ellipsis;
    } else return text;
  };

  /**
   * Strip all slashes from a string
   * @param {*} str
   * @returns
   */
  getStripslashes = (str: string) => {
    if (typeof str === 'undefined') str = ' ';
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Ates Goral (http://magnetiq.com)
    // +      fixed by: Mick@el
    // +   improved by: marrtins
    // +   bugfixed by: Onno Marsman
    // +   improved by: rezna
    // +   input by: Rick Waldron
    // +   reimplemented by: Brett Zamir (http://brett-zamir.me)
    // +   input by: Brant Messenger (http://www.brantmessenger.com/)
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: stripslashes('Kevin\'s code');
    // *     returns 1: "Kevin's code"
    // *     example 2: stripslashes('Kevin\\\'s code');
    // *     returns 2: "Kevin\'s code"

    return (str + '').replace(/\\(.?)/g, function (s, n1) {
      switch (n1) {
        case '\\':
          return '\\';
        case '0':
          return '\u0000';
        case '':
          return '';
        default:
          return n1;
      }
    });
  };

  /**
   * Convert UTF to ASCII
   * @param {*} string
   * @param {*} special
   * @returns
   */
  getNonUnicode = (_string: string, special?: boolean) => {
    var str = String(_string || ' ').trim();
    if (str === '') return '';

    let unicode_char: any = {
      a: 'á|à|ả|ã|ạ|ă|ắ|ặ|ằ|ẳ|ẵ|â|ấ|ầ|ẩ|ẫ|ậ',
      d: 'đ',
      e: 'é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ',
      i: 'í|ì|ỉ|ĩ|ị',
      o: 'ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ',
      u: 'ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự',
      y: 'ý|ỳ|ỷ|ỹ|ỵ',
      A: 'Á|À|Ả|Ã|Ạ|Ă|Ắ|Ặ|Ằ|Ẳ|Ẵ|Â|Ấ|Ầ|Ẩ|Ẫ|Ậ',
      D: 'Đ',
      E: 'É|È|Ẻ|Ẽ|Ẹ|Ê|Ế|Ề|Ể|Ễ|Ệ',
      I: 'Í|Ì|Ỉ|Ĩ|Ị',
      O: 'Ó|Ò|Ỏ|Õ|Ọ|Ô|Ố|Ồ|Ổ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ở|Ỡ|Ợ',
      U: 'Ú|Ù|Ủ|Ũ|Ụ|Ư|Ứ|Ừ|Ử|Ữ|Ự',
      Y: 'Ý|Ỳ|Ỷ|Ỹ|Ỵ'
    };
    let unicode_map: any = {};
    for (let name in unicode_char) {
      var value = unicode_char[name].split('|');
      for (var name_u in value) {
        if (value[name_u]) {
          unicode_map[value[name_u]] = name;
        }
      }
    }

    if (special === void 0) {
      special = false;
    }

    str = str.replace(/[^\x00-\x80]/g, function (a) {
      return unicode_map[a] ? unicode_map[a] : a;
    });
    if (special === true) {
      str = str.replace(/[^a-zA-Z0-9]/g, '-');
      for (var i = 0; i <= 10; i++) {
        str = str.replace('--', '-');
      }
      str = str.toLowerCase();
    }
    return String(str).toLowerCase();
  };

  /**
   * Convert title to name or slug like: title-like-this, allow [^a-zA-Z0-9]
   * @param {*} slug
   * @returns slug
   */
  getSlug = (slug: string) => {
    if (slug === void 0) return '';
    try {
      slug = decodeURIComponent(String(slug || ' '));
      slug = this.getNonUnicode(slug).replace(/[^a-zA-Z0-9]/g, ' ');
      slug = String(slug).trim().replace(/\s/g, '-').toLowerCase();
      slug = String(slug).replace(/\-+/g, '-').toLowerCase();
      return slug;
    } catch (_) {
      return '';
    }
  };

  /**
   * Convert unicode symbols to string
   * @param {*} text
   * @returns
   */
  unicodeToChar = (text: string) => {
    return String(text || ' ').replace(
      /\\u[\dA-F]{4}/gi,
      function (match: string) {
        return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
      }
    );
  };

  /**
   * slugify
   * @param {*} srcPath
   * @returns
   */

  slugify = (_string: any) => {
    var ss = this.unicodeToChar(_string);
    return this.getSlug(ss);
  };

  /**
   * Format number
   * @param _number
   * @param thousand_separate
   * @returns
   */
  formatNumber(_number: number, thousand_separate = '.'): string {
    return String(_number || '0')
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, thousand_separate);
  }
}
