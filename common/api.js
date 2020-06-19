const BASE_URL = 'http://39.106.164.101:80/tt/'

export const request = (options)=>{
    
	return new Promise((resolve,reject)=>{
		uni.request({
			url: BASE_URL + options.url,
			method: options.method || 'GET',
			header:{"content-type":"application/x-www-form-urlencoded"},
			dataType:"json",
			data: options.data || {},
			success: (response)=>{
				resolve(response.body);
			},
			fail: (error)=>{
				reject(error);
			}
		})
	});

}