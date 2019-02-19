import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  blogtitle = 'blog';
  isAuth = false;
  
  posts = [
	{
		title : 'Mon premier post',
		content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin enim magna, eu volutpat purus imperdiet quis. Sed vehicula felis ligula, gravida rhoncus est elementum eu.',
		loveIts : 0,
		created_at: new Date()
	},
	{
		title : 'Mon second post',
		content : 'Nunc mauris metus, pretium eget laoreet sed, volutpat ut est. Vivamus in aliquam leo, in tempor orci. Nullam ultrices at neque vel congue.',
		loveIts : 10,
		created_at: new Date()
	},
	{
		title : 'Mon troisième post',
		content : 'Praesent tincidunt egestas magna, fermentum hendrerit nibh lobortis et. Curabitur tempus ligula in dui vestibulum, eu euismod leo tristique.',
		loveIts : -5,
		created_at: new Date()
	}
  
  ];
}
