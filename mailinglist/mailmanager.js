const validator = require('validator');
const fs = require('fs');
const path = require('path');

module.exports = ({req, res, email}) => {
    const isValid = validator.isEmail(email);
    fs.readFile(path.resolve(__dirname, 'mailingList.json'), 'utf8' ,  (err, data) => {
        const {mailingList} = JSON.parse(data);
        let isPresent = mailingList.includes(email);
        if(!isPresent && isValid){

            mailingList.push(email);

            fs.writeFile(path.resolve(__dirname, 'mailingList.json'), JSON.stringify({mailingList}) , (err) => {
                if(err){throw err;}
            });
        }
        res.json({email, isValid, isPresent});
    })
}