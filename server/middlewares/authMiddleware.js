
const userRouteMiddleware = (req, res, next) => {
    if (req.user && req.user.role === 'user') {
        next();
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
};


const adminRouteMiddleware = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
};

module.exports = { userRouteMiddleware, adminRouteMiddleware };
