import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Stitch } from '../interfaces/stitch.interface'
import { ConverterService } from './converter.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})

export class ConverterComponent implements OnInit {
  public langFrom: string = null;
  public langTo: string = null;
  public stitchNames: object[];
  public targetStitchNames: object[]

  public langOptions: object[];
  public stitchToDisplay: Stitch;
  public showVideos: boolean = false;
  public videoList = [];
  public videoLang: string;
  public langSetting = 'kr';

  constructor(private converterService: ConverterService, private changeDetector: ChangeDetectorRef) {
    this.langSetting === 'kr'? this.langOptions = this.converterService.langOptionsKr : this.langOptions = this.converterService.langOptionsEg;
  }

  async ngOnInit(): Promise<void> {
  }

  public onSelectStitch(id: string): void {
    this.videoList = [];
    this.showVideos = false;
    this.videoLang = null;
    const convertedStitch = this.targetStitchNames.find(item => item['id'] === id);
    if (convertedStitch) {
      this.stitchToDisplay = convertedStitch;
    }
  }

  public showYoutubeList(stitch: Stitch, lang: string): void {
    if (this.videoLang !== lang) {
      this.videoList = [];
      this.showVideos = true;
      this.videoLang = lang;

      if (lang === 'kr') {
        this.videoList = this.converterService.getKoreanTutorials(stitch.id)['src']
      }

      if (lang === 'en') {
        this.videoList = this.converterService.getEnglishTutorials(stitch.id)['src']
      }
    }
  }

  public updateLanguageFrom(language) {
    if (this.langFrom !== language) {
      this.stitchToDisplay = null;
    }
    this.langFrom = language;

    if (this.langFrom && this.langTo) {
      this.updateLanguageFromTo(this.langFrom, this.langTo)
    }

  }
  public updateLanguageTo(language) {
    if (this.langTo !== language) {
      this.stitchToDisplay = null;
    }
    this.langTo = language
    if (this.langFrom && this.langTo) {

      this.updateLanguageFromTo(this.langFrom, this.langTo)
    }
  }

  private updateLanguageFromTo(langFrom: string, langTo: string): void {
    this.stitchNames = this.converterService.stitchNames.find(item => item.lang === langFrom).stitchNames;
    this.targetStitchNames = this.converterService.stitchNames.find(item => item.lang === langTo).stitchNames;
    console.log(this.stitchNames.length, this.targetStitchNames.length)
  }
}
