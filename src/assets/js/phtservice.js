import axios from 'axios'
let phtservice ={};
phtservice.globalGetData =function (url) {
  let deferred = $.Deferred();
  let promise = deferred.promise();
  axios.get(url).then((data) => {
    deferred.resolve(data);
  }, (err) => {
    deferred.resolve(err);
  });
  return promise
};

export {phtservice}
