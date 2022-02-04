# encipher

Simply, securely, and privately encrypt text or the contents of a file. You can use Unicrypt for many things, such as; to encrypt & decrypt the contents of an email, to encrypt the seed phrase to your cryptocurrency wallet, to encrypt a self-note, or SMS messages.

The following changes have been made since we forked zohar1000/in-browser-encryption:
- Rename to Encipher
- Update Styling
- Update Wording
- Make more user friendly
- Integrate into swivro.net/encipher (license & software information on that page can been on the FAQ when you scroll down. the code is the same and is pulled directly from this repository without changes, but it may have a different appearence as swivro.net uses the bootstrap/mobirise framework, which alters the design of some html elements. we do not consider swivro.net/encipher to be a fork of encipher or zohar1000/in-browser-encryption as we are simply integrating the code from this repository without changes, which is why we have not licensed swivro.net/encipher itself under GNU General Public License v3.0.)
- Censor/hide passphrase & seed phrase when typed into input
- Use Swivro CDN instead of Cloudflare CDN for JS files (cryptojs)
