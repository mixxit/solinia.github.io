$(function () {
  const sample = "eyJpZCI6MSwicHJpbWFyeVVVSUQiOiJlYjdiY2E1MC02M2U2LTQ2MmYtYmE3MC1hOGQ1M2VhMmJmOWQiLCJzZWNvbmRhcnlVVUlEIjoiMjNlOGI0MmQtNjY0MC00ODA5LTg3NDEtMThmNDQwN2FlMGZlIiwiZGlzcGxheW5hbWUiOiJJUk9OX1NXT1JEIiwiYmFzZW5hbWUiOiJJUk9OX1NXT1JEIiwiYWJpbGl0eWlkIjowLCJzdHJlbmd0aCI6MCwic3RhbWluYSI6MCwiYWdpbGl0eSI6MCwiZGV4dGVyaXR5IjowLCJwcm9jUmF0ZSI6MCwicGxhY2VhYmxlIjpmYWxzZSwiaW50ZWxsaWdlbmNlIjowLCJ3aXNkb20iOjAsImNoYXJpc21hIjowLCJhbGxvd2VkQ2xhc3NOYW1lcyI6W10sImFsbG93ZWRSYWNlTmFtZXMiOltdLCJxdWVzdGl0ZW0iOmZhbHNlLCJkYW1hZ2UiOjYsIndlYXBvbmFiaWxpdHlpZCI6MCwiYXR0YWNrc3BlZWQiOjAsImVuY2hhbnRtZW50MXZhbCI6MCwiZW5jaGFudG1lbnQydmFsIjowLCJlbmNoYW50bWVudDN2YWwiOjAsImVuY2hhbnRtZW50NHZhbCI6MCwiaHByZWdlbiI6MCwibXByZWdlbiI6MCwid29ydGgiOjE1LCJjb3JlaXRlbSI6ZmFsc2UsImZpcmVSZXNpc3QiOjAsImNvbGRSZXNpc3QiOjAsIm1hZ2ljUmVzaXN0IjowLCJwb2lzb25SZXNpc3QiOjAsImRpc2Vhc2VSZXNpc3QiOjAsIm1hZ2ljIjpmYWxzZSwiZWxlbWVudGFsRGFtYWdlVHlwZSI6MCwiZWxlbWVudGFsRGFtYWdlQW1vdW50IjowLCJzcGVsbHNjcm9sbCI6ZmFsc2UsImNvbG9yIjowLCJkeWUiOjAsImlzVGVtcG9yYXJ5IjpmYWxzZSwiaXNDb25zdW1hYmxlIjpmYWxzZSwiY29uc3VtYWJsZVJlcXVpcmVRdWVzdEZsYWciOiIiLCJjb25zdW1hYmxlUmVxdWlyZU5vdFF1ZXN0RmxhZyI6IiIsImJhbmVVbmRlYWQiOjAsImlzQXVnbWVudGF0aW9uIjpmYWxzZSwiYXVnbWVudGF0aW9uRml0c1Nsb3RUeXBlIjoiTk9ORSIsImRpc2NvdmVyZXIiOiJNaXh4aXRfTkRhbmNlIiwibWluTGV2ZWwiOjAsImFjIjowLCJocCI6MCwibWFuYSI6MCwiaXNFeHBlcmllbmNlQm9udXMiOmZhbHNlLCJza2lsbE1vZFR5cGUiOiJOb25lIiwic2tpbGxNb2RWYWx1ZSI6MCwicmVhZ2VudCI6ZmFsc2UsImxhbmd1YWdlUHJpbWVyIjoiIiwiZm9jdXNFZmZlY3RJZCI6MCwid2VhcG9uRGVsYXkiOjMwLCJsZWF0aGVyUmdiRGVjaW1hbCI6LTEsInJlcXVpcmVkV2VhcG9uU2tpbGxUeXBlIjoiIiwiYXJ0aWZhY3QiOmZhbHNlLCJhcnRpZmFjdEZvdW5kIjpmYWxzZSwic2tpbGxNb2RUeXBlMiI6Ik5vbmUiLCJza2lsbE1vZFZhbHVlMiI6MCwic2tpbGxNb2RUeXBlMyI6Ik5vbmUiLCJza2lsbE1vZFZhbHVlMyI6MCwic2tpbGxNb2RUeXBlNCI6Ik5vbmUiLCJza2lsbE1vZFZhbHVlNCI6MCwiaWRlbnRpZnlNZXNzYWdlIjoiIiwiYmFuZGFnZSI6ZmFsc2UsImVxdWlwbWVudFNsb3QiOiJOb25lIiwiYm9va0F1dGhvciI6IiIsImJvb2tQYWdlcyI6W10sIm5ldmVyRHJvcCI6ZmFsc2UsImxhc3RVcGRhdGVkVGltZSI6IkFwciAyMCwgMjAyMCA1OjE3OjQzIFBNIiwiaXRlbVR5cGUiOiJPbmVIYW5kU2xhc2hpbmciLCJRdWVzdElkIjowLCJhcHBlYXJhbmNlSWQiOjAsImJhbmVEbWdCb2R5IjowLCJiYW5lRG1nUmFjZSI6MCwiYmFuZURtZ0JvZHlBbW91bnQiOjAsImJhbmVEbWdSYWNlQW1vdW50IjowfQ==";
  const form_url = "#";
  const formBox = document.getElementById("renderFormBox");
  let filter_data;
  let dataType_values;
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      filter_data = JSON.parse(this.responseText);

      renderList(filter_data);

let hoverLinks = document.querySelectorAll("a.hoverToLink");
        hoverLinks.forEach((el) => {
          el.addEventListener("mouseover", function () {
            let iframe = el.querySelector(".link-iframe");
            if (!iframe) {
              iframe = document.createElement("iframe");
              iframe.className = "link-iframe";
              iframe.src = el.href;
              el.append(iframe);
            }
          });
        });

    }
  });
  function renderForm(b64, action, method = "POST") {
    let form = document.createElement("form");
    form.action = action;
    form.method = method;

    var data = JSON.parse(atob(b64));
    dataType_values = data;
    var optionData = "<option value=null default>null</option>";

    for (let key in data) {
      let option = `
            <option value="${key}">
              ${key}
            </option>
      `;
      optionData += option;
    }

    form.className = "renderedForm";
    form.style = "font-size:18px;";

    let br1 = document.createElement("br");
    form.append(br1);

    for (var i = 0; i < 4; i++) {
      let select = document.createElement("select");
      select.style = "min-width:100px; padding:5px;";
      select.name = "field_name" + i;
      select.className = "field_name";
      select.innerHTML += optionData;
      form.append(select);

      let selectCriteria = document.createElement("select");
      selectCriteria.style = "min-width:100px; padding:5px;";
      selectCriteria.name = " field_criteria" + i;
      selectCriteria.className = "field_criteria";
      selectCriteria.innerHTML += '<option value=">=">>=</option>';
      selectCriteria.innerHTML += '<option value="<="><=</option>';
      selectCriteria.innerHTML += '<option value="=">=</option>';
      selectCriteria.innerHTML += '<option value="regex">regex</option>';
      form.append(selectCriteria);

      let input = document.createElement("input");
      input.style = "min-width:100px; padding:5px;";
      input.name = " field_value" + i;
      input.className = "field_value";
      form.append(input);
      let br = document.createElement("br");
      form.append(br);
    }
    let submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.id = "submitBtn";
    submitBtn.innerHTML = "Submit";
    submitBtn.style = "min-width:100px;min-height:30px;font-size:18px;";
    form.append(submitBtn);
    formBox.innerHTML = "";
    formBox.append(form);
    form.onsubmit = function (e) {
      e.preventDefault();
      submitBtn.disabled = true;
      let filterListBox = document.querySelector("#filterListBox");
      filterListBox.innerHTML = "Please wait...";
      let keys = Array.from(document.querySelectorAll(".field_name")).map(
        (el) => el.value
      );
      let criteria = Array.from(
        document.querySelectorAll(".field_criteria")
      ).map((el) => el.value);
      let values = Array.from(document.querySelectorAll(".field_value")).map(
        (el) => el.value
      );
      let urlParam = "";
      for (let i = 0; i < keys.length; i++) {
        if (values[i] !== "" && keys[i] !== "null") {
            let test = {
              ">=": "$gte",
              "<=": "$lte",
              "=": "$eq",
              "regex": "$regex",
            };
            urlParam +=
              "&filter={'" +
              keys[i] +
              "':{'" +
              test[criteria[i]] +
              "':" +
              values[i] +
              "}}";
          }
        }
      }
      xhr.open(
        "GET",
        "https://data.fallofanempire.com/items?pagesize=1000&np" + urlParam
      );
      xhr.setRequestHeader(
        "Authorization",
        "Basic Z3Vlc3RzZWFyY2g6Z3Vlc3RzZWFyY2g="
      );

      if (urlParam !== "") {
        xhr.send();
      } else {
        submitBtn.disabled = false;
        filterListBox.innerHTML = "No result found";
      }
      return false;
    };
  }
  function renderList() {
let values = Array.from(document.querySelectorAll(".field_value")).map(
        (el) => el.value
      );

    console.log(values);
    document.querySelector("#submitBtn").disabled = false;
    let filterListBox = document.querySelector("#filterListBox");
    filterListBox.innerHTML = "";
    filter_data.forEach((item) => {
      var url = "https://www.fallofanempire.com/data/item.htm?itemid="+item["id"];
      filterListBox.innerHTML += `<a href="${url}">${item["id"]}</a> - ${item["displayname"]} ${item[values[0]]} <a class="hoverToLink" href="${url}">🔎</a><br>`;
    });

    if (filter_data.length === 0) {
      filterListBox.innerHTML = "No results found";
    } else {
    filterListBox.innerHTML += `First 1000 results displayed`;
    }

  }
  renderForm(sample, form_url, "POST");
});

jQuery.base64 = (function ($) {
  var _PADCHAR = "=",
    _ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    _VERSION = "1.0";

  function _getbyte64(s, i) {
    // This is oddly fast, except on Chrome/V8.
    // Minimal or no improvement in performance by using a
    // object with properties mapping chars to value (eg. 'A': 0)

    var idx = _ALPHA.indexOf(s.charAt(i));

    if (idx === -1) {
      throw "Cannot decode base64";
    }

    return idx;
  }

  function _decode(s) {
    var pads = 0,
      i,
      b10,
      imax = s.length,
      x = [];

    s = String(s);

    if (imax === 0) {
      return s;
    }

    if (imax % 4 !== 0) {
      throw "Cannot decode base64";
    }

    if (s.charAt(imax - 1) === _PADCHAR) {
      pads = 1;

      if (s.charAt(imax - 2) === _PADCHAR) {
        pads = 2;
      }

      // either way, we want to ignore this last block
      imax -= 4;
    }

    for (i = 0; i < imax; i += 4) {
      b10 =
        (_getbyte64(s, i) << 18) |
        (_getbyte64(s, i + 1) << 12) |
        (_getbyte64(s, i + 2) << 6) |
        _getbyte64(s, i + 3);
      x.push(String.fromCharCode(b10 >> 16, (b10 >> 8) & 0xff, b10 & 0xff));
    }

    switch (pads) {
      case 1:
        b10 =
          (_getbyte64(s, i) << 18) |
          (_getbyte64(s, i + 1) << 12) |
          (_getbyte64(s, i + 2) << 6);
        x.push(String.fromCharCode(b10 >> 16, (b10 >> 8) & 0xff));
        break;

      case 2:
        b10 = (_getbyte64(s, i) << 18) | (_getbyte64(s, i + 1) << 12);
        x.push(String.fromCharCode(b10 >> 16));
        break;
    }

    return x.join("");
  }

  function _getbyte(s, i) {
    var x = s.charCodeAt(i);

    if (x > 255) {
      throw "INVALID_CHARACTER_ERR: DOM Exception 5";
    }

    return x;
  }

  function _encode(s) {
    if (arguments.length !== 1) {
      throw "SyntaxError: exactly one argument required";
    }

    s = String(s);

    var i,
      b10,
      x = [],
      imax = s.length - (s.length % 3);

    if (s.length === 0) {
      return s;
    }

    for (i = 0; i < imax; i += 3) {
      b10 =
        (_getbyte(s, i) << 16) | (_getbyte(s, i + 1) << 8) | _getbyte(s, i + 2);
      x.push(_ALPHA.charAt(b10 >> 18));
      x.push(_ALPHA.charAt((b10 >> 12) & 0x3f));
      x.push(_ALPHA.charAt((b10 >> 6) & 0x3f));
      x.push(_ALPHA.charAt(b10 & 0x3f));
    }

    switch (s.length - imax) {
      case 1:
        b10 = _getbyte(s, i) << 16;
        x.push(
          _ALPHA.charAt(b10 >> 18) +
            _ALPHA.charAt((b10 >> 12) & 0x3f) +
            _PADCHAR +
            _PADCHAR
        );
        break;

      case 2:
        b10 = (_getbyte(s, i) << 16) | (_getbyte(s, i + 1) << 8);
        x.push(
          _ALPHA.charAt(b10 >> 18) +
            _ALPHA.charAt((b10 >> 12) & 0x3f) +
            _ALPHA.charAt((b10 >> 6) & 0x3f) +
            _PADCHAR
        );
        break;
    }

    return x.join("");
  }

  return {
    decode: _decode,
    encode: _encode,
    VERSION: _VERSION,
  };
})(jQuery);
