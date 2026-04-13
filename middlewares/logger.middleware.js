const logger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[CLINICA] ${timestamp} | ${req.method} ${req.url}`);
  next(); 
};

module.exports = logger;
