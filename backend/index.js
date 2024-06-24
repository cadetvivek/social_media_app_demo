const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const postsRoutes = require('./routes/posts');
const commentsRoutes = require('./routes/comments');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/posts', postsRoutes);
app.use('/comments', commentsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
