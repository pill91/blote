function test03() {
  var bytes = string_to_utf8_bytes(document.getElementById('hex').value);
  alert(bytes_to_hex_string(bytes));
}

// 문자열을 UTF8 16 진수 문자열로 변환
function string_to_utf8_hex_string(text) {
  var bytes1 = string_to_utf8_bytes(text);
  var hex_str1 = bytes_to_hex_string(bytes1);
  return hex_str1;
}

// 문자열을 UTF8 바이트 배열로 변환
function string_to_utf8_bytes(text) {
  var result = [];
  if (text == null) return result;
  for (var i = 0; i < text.length; i++) {
    var c = text.charCodeAt(i);
    if (c <= 0x7f) {
      result.push(c);
    } else if (c <= 0x07ff) {
      result.push(((c >> 6) & 0x1f) | 0xc0);
      result.push((c & 0x3f) | 0x80);
    } else {
      result.push(((c >> 12) & 0x0f) | 0xe0);
      result.push(((c >> 6) & 0x3f) | 0x80);
      result.push((c & 0x3f) | 0x80);
    }
  }
  return result;
}

// 바이트 값을 16 진수 문자열로 변환
function byte_to_hex(byte_num) {
  var digits = byte_num.toString(16);
  if (byte_num < 16) return '0' + digits;
  return digits;
}

// 바이트 배열을 16 진수 문자열로 변환
function bytes_to_hex_string(bytes) {
  var result = '';
  for (var i = 0; i < bytes.length; i++) {
    result += byte_to_hex(bytes[i]);
  }
  return result;
}
