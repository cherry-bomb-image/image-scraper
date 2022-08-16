const healthcheck = function(req, res) {
  const response = get_response();
  res.json(response);
};

const get_response = function() : object {
  const environment : string = process.env.NODE_ENV;
  const version : string = process.env.VERSION;

  return {
    "status": "available",
    environment,
    version
  };
};

export { healthcheck };