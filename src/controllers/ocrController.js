const Tesseract = require("tesseract.js");
const fs = require("fs")
const path = require("path")

function decode_base64_to_image(encoded_image,name){
    const filePath = path.join(__dirname, `/images/${Date.now()}_${name}`)
    const buffer = Buffer.from(encoded_image.split(',')[1], "base64")
    fs.writeFileSync(filePath, buffer)

    return filePath
}

export const scanNewCard = (req, res) => {
    const name = req.body['name'] 
    const image = req.body['base64'];
    const language = "eng"

    const imagePath = decode_base64_to_image(image,name)

    Tesseract.recognize(imagePath, language, {
        logger: (m) => console.log(m),
     }).then(({ data: { text } }) => {
        res.send(text)
     });
}