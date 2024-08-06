let backendHost; //백엔드 호스트 주소 결정

const hostname = window && window.location && window.location.hostname;

if(hostname === "localhost") {
  backendHost = "http://localhost:8080";
}else{
  backendHost = "http://"Todo-backend-env.eba-3jceg3xn.ap-northeast-2.elasticbeanstalk.com";
}
 
export const API_BASE_URL = `${backendHost}`;
