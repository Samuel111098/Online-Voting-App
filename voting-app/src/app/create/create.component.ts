import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
	selector: 'app-create',
	templateUrl: './create.component.html',
	styleUrls: [ './create.component.css' ]
})
export class CreateComponent implements OnInit {
	createPost = new FormGroup({
		title: new FormControl(''),
		author: new FormControl(''),
		statement: new FormControl(''),
		date: new FormControl(''),
		category: new FormControl(''),
		votecount: new FormControl(0)
	});
	constructor(private posts: CommonService) {}

	ngOnInit(): void {}
	addPost() {
		//console.log(this.createPost.value);
		this.posts.addPost(this.createPost.value).subscribe((result) => {
			console.log('Data recieved!', result);
		});
	}
}
