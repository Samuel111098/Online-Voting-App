import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-create',
	templateUrl: './create.component.html',
	styleUrls: [ './create.component.css' ]
})
export class CreateComponent implements OnInit {
	alert: boolean = false;
	createPost = new FormGroup({
		title: new FormControl(''),
		author: new FormControl(''),
		statement: new FormControl(''),
		date: new FormControl(''),
		category: new FormControl(''),
		votecount: new FormControl(0)
	});
	constructor(private posts: CommonService, private router: Router) {}

	ngOnInit(): void {}
	addPost() {
		//console.log(this.createPost.value);
		this.posts.addPost(this.createPost.value).subscribe((result) => {
			this.alert = true;
			this.createPost.reset({});
			this.router.navigate([ '../admin' ]);
			//console.log('Data recieved!', result);
		});
	}
	closeAlert() {
		this.alert = false;
	}
}
