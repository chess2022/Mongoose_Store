// productRouter.put("/new", (req, res) => {
//     Flower.find({}, (err, flower) => {
//         let newFlower = { ...Flower[req.params.id] };
//         newFlower.id = Flower.length + 1
//         newFlower.img = req.body.image;
//         newFlower.name = req.body.name;
//         newFlower.description = req.body.description;
//         newFlower.price = req.body.price;
//         newFlower.qty = req.body.qty;
//         newFlower.tags = req.body.tags;
//         Flower[req.params._id] = newFlower;
//         res.redirect(`/flowers/${req.params.id}`, flower, newFlower);
//     });
//     console.log(newFlower)
// });

/*                    <p><label for="file" style="cursor: pointer;">Upload Image</label></p>
                    <p><img id="output" width="200" height="200" /></p>

                    <script>
                    var loadFile = function(event) {
                        var image = document.getElementById('output');
                        image.src = URL.createObjectURL(event.target.files[0]);
                    };
                    </script>
*/


// const fileUpload = require("express-fileupload");
// const path = require("path");

// app.use(fileUpload());

// enctype = "multipart/form-data";


        // if (!req.files) {
        //     return res.status(400).send("No files were uploaded.");
        // }
        // const file = req.files.img;
        // const path = "mongoose_store/public/images/other/" + file.name;

        // file.mv(path, (err) => {
        //     if (err) {
        //         return res.status(500).send(err);
        //     }
        // });
