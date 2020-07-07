import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
	selector: 'app-postcard',
	templateUrl: './postcard.component.html',
	styleUrls: [ './postcard.component.css' ]
})
export class PostcardComponent implements OnInit {
	public collection: any;
	constructor(private CommonService: CommonService) {}

	ngOnInit(): void {
		this.CommonService.getPosts().subscribe((result) => {
			this.collection = result;
			console.log(this.collection);
		});
	}
}
