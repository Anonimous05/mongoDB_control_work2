module.exports = {
    uploadPath  : `${__dirname}/public/images`,
    videoPath: `${__dirname}/public/videos`,
    database: 'mongodb://localhost/categories',
    databaseOptions: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    },
    port: 8000
};