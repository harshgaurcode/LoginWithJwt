import { Injectable } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export const CustomInterceptor: HttpInterceptorFn = (req, next) => {
  debugger;
  const token = localStorage.getItem('angular18Token');
  const clonedReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });
  return next(req);
};
