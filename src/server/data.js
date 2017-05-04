import Vue from 'vue'
import Axios from 'axios'

export default {
    /**
	 * [getData]
	 * @param  {[type]}   url         [description]
	 * @param  {Function} callback    [description]
	 * @param  {[type]}   errCallback [description]
	 * @return {[type]}               [description]
	 **/
        	getData(url, params, callback, errCallback) {
                Axios.get(url,{params:params})
                     .then(function(response){
                                callback(response);
                            })
                      .catch(function(error){
                                errCallback(error)
                            });
		  },
      /**
     * [postData]
     * @param  {[type]}   url         [description]
     * @param  {Function} callback    [description]
     * @param  {[type]}   errCallback [description]
     * @return {[type]}               [description]
     **/
           postData(url, params, callback, errCallback) {
                Axios.post(url,{params:params})
                     .then(function(response){
                                callback(response);
                            })
                     .catch(function(error){
                                errCallback(error);
                            });

          }


}
