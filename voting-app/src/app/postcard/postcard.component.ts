import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { ActivatedRoute } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
	selector: 'app-postcard',
	templateUrl: './postcard.component.html',
	styleUrls: [ './postcard.component.css' ]
})
export class PostcardComponent implements OnInit {
	public collection: any;
	public collect: any;
	public count: any;
	constructor(private CommonService: CommonService, private router: ActivatedRoute) {}

	ngOnInit(): void {
		this.CommonService.getPosts().subscribe((result) => {
			this.collection = result;
			//console.log(this.collection);
		});
		this.CommonService.getData(this.router.snapshot.params.id).subscribe((result) => {
			this.count = result['votecount'];
			this.collect = result;
			// console.log(this.collect);
			return this.collect;
		});
	}
	performActionUp = () => {
		this.count += 1;
		this.collect['votecount'] = this.count;
		this.count = 0;
		this.CommonService.putData(this.router.snapshot.params.id, this.collect).subscribe((result) => {
			console.log(result, 'Voting Successfull!');
		}),
			() => {
				this.count = 0;
			};
	};
	performActionDown = () => {
		this.count -= 1;
		this.collect['votecount'] = this.count;
		this.count = 0;
		this.CommonService.putData(this.router.snapshot.params.id, this.collect).subscribe((result) => {
			console.log(result, 'Voting Successfull!');
		});
	};
}
