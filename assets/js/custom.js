function cpyClipboardmc() {
    const el = document.createElement('textarea');
    el.value = "mc.worldofatlantida.com";
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    alert("Copied: " + el.value + " to clipboard!");
    document.body.removeChild(el);
}
$('[data-toggle="tooltip"]').tooltip()