const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const MusicRoutes = require('./routers/MusicRoutes');

dotenv.config();

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/music', MusicRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`)
})

