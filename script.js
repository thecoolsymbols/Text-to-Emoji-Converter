function convertToEmoji() {
    let textInput = document.getElementById("textInput").value;
    let output = textInput
        .replace(/\bhappy\b/gi, '😊')
        .replace(/\blove\b/gi, '❤️')
        .replace(/\bheart\b/gi, '💖')
        .replace(/\bsad\b/gi, '😢')
        .replace(/\bsun\b/gi, '☀️')
        .replace(/\bcat\b/gi, '🐱')
        .replace(/\bdog\b/gi, '🐶');

    document.getElementById("output").innerHTML = output;
}
