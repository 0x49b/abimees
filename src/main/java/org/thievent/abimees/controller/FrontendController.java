package org.thievent.abimees.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/")
public class FrontendController {

    @RequestMapping(method = RequestMethod.GET)
    public String home(){
        return "abimees-frontend/index";
    }

}