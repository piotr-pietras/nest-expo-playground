import { env } from "@/constants/env";
import { Post } from "@/services/redux/post.slice";
import { User } from "@/services/redux/user.slice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const url = `http://${env.HOST_URL}:${env.HOST_PORT}`;

export const signUp = async (body: { email: string; password: string }) => {
  const res = await fetch(`${url}/user/signUp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const payload = await res.json();
  if (payload?.statusCode && payload.statusCode >= 400) {
    throw payload;
  }
  return payload as { access_token: string };
};

export const signIn = async (body: { email: string; password: string }) => {
  const res = await fetch(`${url}/user/signIn`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const payload = await res.json();
  if (payload?.statusCode && payload.statusCode >= 400) {
    throw payload;
  }
  return payload as { access_token: string };
};

export const getUser = async () => {
  const token = await AsyncStorage.getItem("access_token");
  const res = await fetch(`${url}/user`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const payload = await res.json();
  if (payload?.statusCode && payload.statusCode >= 400) {
    throw payload;
  }
  return payload as User;
};

export const getPosts = async () => {
  const token = await AsyncStorage.getItem("access_token");
  const res = await fetch(`${url}/post`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const payload = await res.json();
  if (payload?.statusCode && payload.statusCode >= 400) {
    throw payload;
  }
  return payload as Post;
};
