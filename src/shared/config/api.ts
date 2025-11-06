import axios from "axios";
import { apiUrl } from "@/shared/config/env";

export const api = axios.create({
  baseURL: `${apiUrl}/api/v1`,
  withCredentials: true,
  withXSRFToken: true,
});
