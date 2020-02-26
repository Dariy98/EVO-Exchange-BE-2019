package com.hillel.items_exchange.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {
    @GetMapping("/temp")
    public String getTemp() {
        return "temp";
    }
}