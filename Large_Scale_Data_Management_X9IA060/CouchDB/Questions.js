//------------------------------------------------//
// Q1
// Give all titles.
//------------------------------------------------//
function(doc) {
  emit(doc.title,doc.title);
}

//------------------------------------------------//
// Q2
// Titles of the movies published after 2000.
//------------------------------------------------//
function(doc) {
    if(doc.year>2000)
      emit(doc.title, doc.year);
}

//------------------------------------------------//
// Q3
// Summary of “Shadow of Angels (Schatten der Engel)”
//------------------------------------------------//
function(doc) {
    if(doc.title=="Shadow of Angels (Schatten der Engel)")
      emit(doc._id, doc);
}

//------------------------------------------------//
// Q4
// Who is the director of "Fatty and Mabel Adrift"?
//------------------------------------------------//
function(doc) {
    if(doc.title=="Fatty and Mabel Adrift")
      emit(doc.title, doc.director);
}

//------------------------------------------------//
// Q5
// Title of the movies featuring Correna Camus.
//------------------------------------------------//
function(doc) {
    if(doc.director=="Correna Camus")
      emit(doc.director, doc.title);
}

//------------------------------------------------//
// Q6
// What was the role of Zeke Cregin in "The Nautical Chart"?
//------------------------------------------------//
function(doc) {
	if(doc.title=="The Nautical Chart"){
		if (doc.actors) {
			for(var actor in doc.actors) {
				if(doc.actors[actor].name=="Zeke Cregin")
					emit(doc.actors[actor].name, doc.actors[actor].role);
			}
		}
	}
}

//------------------------------------------------//
// Q7
// Get the movies whose cast consists of exactly three actors ?
//------------------------------------------------//
function(doc) {
     if (doc.actors) {
             if(doc.actors.length==3)
                emit(doc.title, doc.actors.length);
    }
    
}

//------------------------------------------------//
// Q8
// Create a flat list of all the title-role pairs.
//------------------------------------------------//
function(doc) {
	if (doc.actors) {
		for(var actor in doc.actors) {
			emit(doc.actors[actor].name, doc.actors[actor].role);
		}
	}
}

//------------------------------------------------//
// Q9
// Get a movie given its title
// http........../Q9?Key=".."
//------------------------------------------------//
function(doc) {
  emit(doc.title, doc);
}

//------------------------------------------------//
// Q10
// Get the movies featuring an actor’s name
//------------------------------------------------//
function(doc) {
	if (doc.actors) {
		for(var actor in doc.actors) {
			if(doc.actors[actor].name==doc.title)
				emit(doc.title, doc.actors[actor].name);
		}
	}
}

//------------------------------------------------//
// Q10bis
// Get the movies featuring an actor’s name
// http............/Q10bis?key=".."
//------------------------------------------------//
function(doc) {
    if(doc.actors){
		for(var actor in doc.actors) {
			emit(doc.actors[actor].name, doc);
		}
	}
}

//------------------------------------------------//
// Q11
// Get the title of movies published a given year or in a year range.
// http............/Q11?key="1995"
// http............/Q11?startkey=1995&endkey=2005
//------------------------------------------------//
function(doc) {
  emit(doc.year, doc.title);
}


//------------------------------------------------//
// Q12
// Show the movies where the director is also an actor.
//------------------------------------------------//



//------------------------------------------------//
// Q13
// Show the directors, along with the list of their films.
//------------------------------------------------//





//------------------------------------------------//
// Q14
// Show the actors, along with the list of directors of the film they played in.
//------------------------------------------------//



//------------------------------------------------//
//------------------------------------------------//
//--------------------AUTRES----------------------//
//------------------------------------------------//
//------------------------------------------------//

function(doc) {
     if (doc.actors) {
         for(var actor in doc.actors) {
             if(doc.actors[actor].name=="..")
                emit(doc.actors[actor].name, doc.title);
        }
    }
}

function(doc) {
  emit(doc.id, doc.director);
}


function(doc) {
  emit(doc.title, doc);
}


