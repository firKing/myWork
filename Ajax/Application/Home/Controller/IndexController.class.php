<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function index(){
        $this->display();
    }

    public function ajaxHandle(){
    	$data = I('post.');
    	
    	$this->ajaxReturn($data, 'json');
    }
}