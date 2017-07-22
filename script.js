	  var keySize = 256;
	  var ivSize = 128;
	  var iterations = 100;

    function getData() {
    	var isValid = true;
	    var key = (document.getElementById('key').value || '').trim();
	    var text = (document.getElementById('text').value || '').trim();
	    if (!key || !text) {
	      isValid = false;
		    alert('please enter key and text');
	    }

	    return { isValid: isValid, key: key, text: text };
    }

    function encrypt() {
      var data = getData();
      if (data.isValid) {
	      // var decrypt = asmCrypto.AES_CBC.encrypt(text, key);
	      var salt = CryptoJS.lib.WordArray.random(128/8);

	      var key = CryptoJS.PBKDF2(data.key, salt, {
		      keySize: keySize/32,
		      iterations: iterations
	      });

	      var iv = CryptoJS.lib.WordArray.random(128/8);

	      var encrypted = CryptoJS.AES.encrypt(data.text, key, {
		      iv: iv,
		      padding: CryptoJS.pad.Pkcs7,
		      mode: CryptoJS.mode.CBC
	      });

	      // salt, iv will be hex 32 in length
	      // append them to the ciphertext for use  in decryption
	      var transitmessage = salt.toString()+ iv.toString() + encrypted.toString();
	      document.getElementById('result').value = transitmessage;
      }
    }

    function decrypt() {
	    var data = getData();
	    if (data.isValid) {
	      var salt = CryptoJS.enc.Hex.parse(data.text.substr(0, 32));
	      var iv = CryptoJS.enc.Hex.parse(data.text.substr(32, 32))
	      var encrypted = data.text.substring(64);

	      var key = CryptoJS.PBKDF2(data.key, salt, {
		      keySize: keySize/32,
		      iterations: iterations
	      });

	      var decrypted = CryptoJS.AES.decrypt(encrypted, key, {
		      iv: iv,
		      padding: CryptoJS.pad.Pkcs7,
		      mode: CryptoJS.mode.CBC

	      })
		    document.getElementById('result').value = decrypted.toString(CryptoJS.enc.Utf8);
	    }
    }
