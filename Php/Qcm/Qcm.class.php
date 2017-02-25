<?php 

class Qcm{
	
	private $_questions;
	
	public function __construct(){
		$this->_questions = array();
	}
	
	public function ajouterQuestion($question){
		array_push($this->_questions, $question);
	}
	
	public function generer(){
		foreach ($this->_questions as $index=>$question) {
			echo "<fieldset><legend> Question numéro ".($index+1)."</legend>";
			echo "<strong> ".$question->intitule()."</strong><br />";
			foreach ($question->reponses() as $reponse) {
				echo"<input type='radio' name='question_$index' value=".$reponse->estBonne()." />".$reponse->intitule()."<br />";
			}
			echo "</fieldset><br />";
		}
	}
	
	public function afficher(){
		foreach ($this->_questions as $index=>$question) {
			echo "<fieldset><legend> Question numéro ".($index+1)."</legend>";
			echo "<strong> ".$question->intitule()."</strong><br />";
			if ($_POST["question_$index"]){
				echo "<p> Bonne réponse ";
			}else{
				echo "<p> Mauvaise réponse </p>";
				foreach ($question->reponses() as $reponse) {
					if ($reponse->estBonne()){
					echo"La bonne réponse est : ".$reponse->intitule()."<br />";
					}
				}
			}
			echo "<p>".$question->explication()."</p>";
			echo "</fieldset><br />";
		}
	}
}
?>
