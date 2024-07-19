const fs = require('fs');
const CryptoJS = require('crypto-js');
const crypto = require('crypto');

// قراءة ملف XML بترميز UTF-8
fs.readFile('./users.xml', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    // عرض محتوى الملف للتحقق من محتواه
    console.log('File content:', data);

    // تشفير محتوى الملف باستخدام MD5
    
const hash = crypto.createHash('md5').update(data).digest('hex'); // Truncate to 16 bytes (128 bits)

    console.log('MD5 Hash:', hash);

    // إضافة التجزئة المشفرة إلى ملف جديد كسطر جديد
    fs.appendFile('./users.xml.hash', hash + '\n', (err) => {
        if (err) {
            console.error('Error appending to the file:', err);
            return;
        }

        console.log('MD5 hashed value appended to md5_hashed_file.txt');
    });
});
