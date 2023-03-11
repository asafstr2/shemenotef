// Need to use the React-specific entry point to import createApi
import { fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { BASEURL, jwtToken, saveMe } from "util/const";
import { RootState } from "app/store";
import { PaymentSuccessParams, GoogleRes } from "app/types/core";

export const truncateString = (str: string, num = 10) =>
  str.length > num ? str.slice(0, num) + "..." : str;

export const extractCurrentUserId = (state: RootState) =>
  state?.user?.currentUser?.id;
export const extractToken = () => jwtLcGet();

export const baseQueryWithUser = retry(
  async (args: any, api: any, extraOptions: any): Promise<any> => {
    const userId = extractCurrentUserId(api.getState());
    const result = await fetchBaseQuery({
      baseUrl: `${BASEURL}/users/${userId}`,
      prepareHeaders: (headers) => {
        const token = extractToken();
        // If we have a token set in state, let's assume that we should be passing it.
        if (token) {
          headers.set("authorization", `Bearer ${token}`);
        }
        return headers;
      },
    })(args, api, extraOptions);

    // bail out of re-tries immediately if unauthorized,
    // because we know successive re-retries would be redundant
    if (result.error?.status === 401) {
      retry.fail(result.error);
    }

    return result;
  },
  {
    maxRetries: 5,
  }
);
export const baseQueryWithUserForProduct = retry(
  async (args: any, api: any, extraOptions: any): Promise<any> => {
    const userId = extractCurrentUserId(api.getState());
    const result = await fetchBaseQuery({
      baseUrl: `${BASEURL}/products/${userId}`,
      prepareHeaders: (headers) => {
        const token = extractToken();
        // If we have a token set in state, let's assume that we should be passing it.
        if (token) {
          headers.set("authorization", `Bearer ${token}`);
        }
        return headers;
      },
    })(args, api, extraOptions);

    // bail out of re-tries immediately if unauthorized,
    // because we know successive re-retries would be redundant
    if (result.error?.status === 401) {
      retry.fail(result.error);
    }

    return result;
  },
  {
    maxRetries: 5,
  }
);
export const baseQueryWitParamsAndhUser = retry(
  async (args: any, api: any, extraOptions: any): Promise<any> => {
    const userId = extractCurrentUserId(api.getState());
    const result = await fetchBaseQuery({
      baseUrl: `${BASEURL}/paymant/${userId}`,
      prepareHeaders: (headers) => {
        const token = extractToken();
        // If we have a token set in state, let's assume that we should be passing it.
        if (token) {
          headers.set("authorization", `Bearer ${token}`);
        }
        return headers;
      },
    })(args, api, extraOptions);

    // bail out of re-tries immediately if unauthorized,
    // because we know successive re-retries would be redundant
    if (result.error?.status === 401) {
      retry.fail(result.error);
    }

    return result;
  },
  {
    maxRetries: 5,
  }
);
export const baseQuery = retry(
  async (args: any, api: any, extraOptions: any): Promise<any> => {
    const result = await fetchBaseQuery({
      baseUrl: `${BASEURL}`,
      prepareHeaders: (headers, { getState }) => {
        const token = extractToken();
        // If we have a token set in state, let's assume that we should be passing it.
        if (token) {
          headers.set("authorization", `Bearer ${token}`);
        }
        return headers;
      },
    })(args, api, extraOptions);

    // bail out of re-tries immediately if unauthorized,
    // because we know successive re-retries would be redundant
    if (result.error?.status === 401) {
      retry.fail(result.error);
    }
    return result;
  },
  {
    maxRetries: 5,
  }
);

export const userLcSet = (user: any) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const jwtLcSetLogout = () => {
  localStorage.removeItem(jwtToken);
  sessionStorage.removeItem(jwtToken);
};
export const jwtLcSet = (jwt: string) => {
  if (!jwt) {
    jwtLcSetLogout();
  }
  saveMeLcGet()
    ? localStorage.setItem(jwtToken, JSON.stringify(jwt))
    : sessionStorage.setItem(jwtToken, JSON.stringify(jwt));
};
export const saveMeLcSet = (bol: boolean) => {
  localStorage.setItem(saveMe, JSON.stringify(bol));
};
export const jwtLcGet = () =>
  JSON.parse(
    localStorage.getItem(jwtToken) ?? sessionStorage.getItem(jwtToken) ?? '""'
  );
export const saveMeLcGet = () =>
  JSON.parse(localStorage.getItem(saveMe) || "{}");

const camelToReadable = (str: string) =>
  str.replace(/[A-Z]/g, (letter: string) => ` ${letter.toLowerCase()}`);

//using the signed url to upload all ffiles and get the urls
export const uploadFiles = async (
  {
    apikey,
    timestamp,
    signature,
    folder,
    url,
  }: {
    apikey: string;
    timestamp: string;
    signature: string;
    folder: string;
    url: string;
  },
  files: File[]
) => {
  const fileConstract = (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("api_key", apikey);
    formData.append("timestamp", timestamp);
    formData.append("signature", signature);
    formData.append("folder", folder);
    return formData;
  };
  const results = await Promise.all(
    files.map((file) =>
      fetch(url, {
        method: "POST",
        body: fileConstract(file),
      }).then((r) => r.json())
    )
  );
  return results;
};

export const isAnAdmin = (state: RootState) => {
  const userRoles = state?.user?.currentUser?.roles;
  return userRoles?.includes("admin");
};

export function parseUrl(url: string): {
  protocol: string;
  host: string;
  port: string;
  path: string;
  queryParameters: PaymentSuccessParams;
} {
  const parser = document.createElement("a");
  parser.href = url;

  const queryParams = {};
  const query = parser.search.substring(1);
  const queryItems = query.split("&");

  for (let i = 0; i < queryItems.length; i++) {
    const item = queryItems[i].split("=");
    // @ts-ignore
    queryParams[item[0]] = decodeURIComponent(item[1]);
  }

  return {
    protocol: parser.protocol.replace(":", ""),
    host: parser.hostname,
    port: parser.port,
    path: parser.pathname,
    // @ts-ignore
    queryParameters: queryParams,
  };
}

export const fetchingUserFromGoogle = async (
  access_token: string
): Promise<GoogleRes> =>
  await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
    });