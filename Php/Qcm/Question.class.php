<?php 

class Question{
	
	private $_intitule;
	private $_reponses;
	private $_explication;
	
	public function __construct($intitule){
		$this->_intitule = $intitule;
		$this->_reponses = array();
		$this->_explication = "";
	}
	
	public function ajouterReponse($reponse){
		array_push($this->_reponses, $reponse);
	}
	
	public function setExplications($explication){
		$this->_explication = $explication;
	}
	
	public function intitule(){
		return $this->_intitule;
	}
	
	public function reponses(){
		return $this->_reponses;
	}
	
	public function explication(){
		return $this->_explication;
	}
}
?>
