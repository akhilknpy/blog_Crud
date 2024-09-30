const express = require("express");
const app = express();
var PORT = 3000;
app.use(express.json());
const blogModel=require('./model');
require('./connection')


app.get('/', async (req, res) => {
  try{
  const blog = await blogModel.find();
  console.log(blog)
  res.status(200).send(blog)
}catch{
  res.status(404).send('Data fetching Failed')
  }
});


app.post('/add', async (req, res) => {
  try{
  const blog=req.body
  const newblog=blogModel(blog)
  await newblog.save();
  res.status(200).send('New Blog Inserted')
}catch{
  res.status(404).send('Data insertion failed')
}
});

app.put('/edit/:id', async (req, res) => {
  try{
  const blogUpdate=req.body
  console.log( blogUpdate)
  const data= await blogModel.findByIdAndUpdate(req.params.id, blogUpdate )
  res.status(200).send('Blog Updated')
}catch{
  res.status(404).send('Deletion Failed')
}
});

app.delete('/delete/:id', async (req, res) => {
  try{
  await blogModel.findByIdAndDelete(req.params.id)
  res.status(200).send('Blog deleted')
}catch{
  res.status(404).send('Deletion failed')
}
});



app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
