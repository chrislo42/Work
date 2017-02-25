<?php 

class Reponse{
	
	private $_intitule;
	private $_bingo;
	
	public function __construct($intitule, $rep = 0){
		$this->_intitule = $intitule;
		$this->_bingo = $rep;
	}
	
	public function intitule(){
		return $this->_intitule;
	}
	
	public function estBonne(){
		return $this->_bingo;
	}
}
?>
