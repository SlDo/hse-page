import { AxiosResponse } from 'axios';
import { request } from '../../request';

export interface News {
  icon: number
  originalTitle: string
  img: string
  meta: {
    event_address: string
    mention: { href: string, title: string }[]
    tags?: { href: string, title: string, tag_id: number }[]
    peoples?: { href: string, img: string, title: string, about: string }[]
  }
  text: string
  href: string
  hide_on_main: number
  id: number
  extra: {
    date: {
      formatted: string
      month: string
      day: string
      extra: {
        F: string
        a: string
        d: string
        x: string
        E: string
        Y: string
        V: string
        y: string
        Q: string
        h: string
        M: string
        C: string
        f: string
        A: string
        P: string
        m: string
        v: string
        B: string
        H: string
        p: string
        c: string
        b: string
        D: string
        q: string
      },
      year: string
    },
    style: number
  }
  picture: {
    img: string
    escaped_description: string
  }
  'iq_big_splash_image': {
    img: string
  },
  raw_date: string,
  ics_link: string | null,
  'iq_small_splash_image': {
    img: string
  },
  escaped_title: string
  raw_date_wf: string
  gallery: null,
  title: string,
  annotation: string
}

type getNewsResponse = { ok: number, data: News[]}

export const getNews = (): Promise<AxiosResponse<getNewsResponse>> => request<getNewsResponse>({ url: 'https://www.hse.ru/api/j4m/news/339601867', method: 'GET' });
