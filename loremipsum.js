        const dummyTexts = {
            english: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            chinese: "洛伦 艾普森 是 否 定 是 自然 沉默 发 减少 暂时 发生 工作 和 痛苦 伟大",
            french: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            hindi: "लोरम इप्सम डोलर सिट अमेट कॉन्सेकट्यूर एडिपिसिंग एलिट सेड डू ईउस्मोड टेम्पोर incididunt ut labore et dolore magna aliqua",
        };

        function generateText() {
            const language = document.getElementById("language").value;
            const wordCount = parseInt(document.getElementById("wordCount").value, 10);
            const outputDiv = document.getElementById("output");

            if (!wordCount || wordCount < 1) {
                outputDiv.innerText = "Please enter a valid number of words.";
                return;
            }

            const words = dummyTexts[language].split(" ");
            const repeatedWords = Array(Math.ceil(wordCount / words.length))
                .fill(words)
                .flat()
                .slice(0, wordCount);

            outputDiv.innerText = repeatedWords.join(" ");
        }

        function copyText() {
            const outputDiv = document.getElementById("output");
            const text = outputDiv.innerText;

            if (!text) {
                alert("Nothing to copy! Generate some text first.");
                return;
            }

            navigator.clipboard.writeText(text).then(
                () => alert("Text copied to clipboard!"),
                () => alert("Failed to copy text.")
            );
        }