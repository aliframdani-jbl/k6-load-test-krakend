import http from 'k6/http';
import { check, sleep } from 'k6';
import { routes } from './routes.js';

export const options = {
  vus: 100,
  duration: '1m',
};

export default function () {
  const route = routes[Math.floor(Math.random() * routes.length)];
  // const route = routes[0]

  const payload = Object.keys(route.payload).length > 0 ? JSON.stringify(route.payload) : null;
  const res = http.post(route.url, payload, route.headers);

  // const res = http.post("http://localhost:8080/push-notification/shopify/62500274342", payload, route.headers);

  check(res, {
    'is status 200': (r) => {
      if (r.status !== 200) {
        console.log("failed status: ")
        console.log("url: ",r.url)
        console.log("status: ", r.status)
        console.log("error: ",r.error)
        console.log("error code: ",r.error_code)
        console.log("/n")
        return false
      }
      return true
    },
    'is prod env': (r) => {
      if (!r.body || r.body.trim() === '') {
        console.log("failed body nil testcase: ")
        console.log("url: ",r.url)
        console.log("/n")
        return false;
      }
      try {
        const body = JSON.parse(r.body);
        if (body.env !== 'prod') {
          console.log("yang normal: ", body.env)
          console.log("url: ",r.url)
          console.log("/n")
        }
        
        return body.env === 'prod';
      } catch (e) {
        console.log("failed env testcase: ")
        console.log("url: ",r.url)
        console.log("env: ",body.env )
        console.log("/n")
        return false;
      }
    },
  });
}
