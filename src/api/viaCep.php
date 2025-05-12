<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

class viaCep {

    public $baseUrl;
    public $format;

    function __construct() {
        $this->baseUrl = 'https://viacep.com.br/ws';
        $this->format = 'json';
    }

    function returnDados($req) {
        $cep = preg_replace('/[^0-9]/', '', $req['cep']);

        $url = "{$this->baseUrl}/{$cep}/{$this->format}";

        $curl = curl_init();

        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_TIMEOUT, 10);

        $response = curl_exec($curl);
        $http_code = curl_getinfo($curl, CURLINFO_HTTP_CODE);

        curl_close($curl);

        if ($http_code !== 200) {
            http_response_code($http_code);
            return;
        }

        return $response;
    }
};


$cepObj = new viaCep;

echo $cepObj->returnDados($_REQUEST);