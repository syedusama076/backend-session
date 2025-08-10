const authenticate = (req, res, next) => {
    const { token } = req.headers;
    console.log("Authentication middleware called with email:", token);
    if (token === "NnJgKzT6Huo5wcV1imGTWg78Br7iEszb") {
        next();
    } else {
        res.status(401).send({ message: 'Unauthorized' });
    }
};

export default authenticate;
