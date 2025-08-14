const multer = require("multer")
const path=require("path")

const storage = multer.diskStorage({
    destination: function (req, file, next) {

        let folderName = "uploads"

        if(file.fieldname=="parentCategoryImage"){
            folderName="uploads/parentCategory"
        }
        

        next(null, folderName)
    },
    filename: function (req, file, next) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        next(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
    }

})

const upload = multer({ storage: storage })


module.exports=upload