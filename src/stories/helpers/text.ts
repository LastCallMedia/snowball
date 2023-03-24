export class Lipsum {
    sentences = [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        `Purus consequat sollicitudin tortor sociis suspendisse molestie augue mauris et.`,
        `Mattis donec semper lobortis varius aliquam nibh massa elementum faucibus.`
    ];
    words = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua".split(" ")
    getSentences(count: number):string {
        return this.sentences.slice(0, count).join(" ")
    }
    getWords(count: number, offset = 0):string {
        return this.words.slice(offset, offset + count).join(" ")
    }
}