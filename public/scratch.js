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
