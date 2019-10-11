import { StrengthPipe } from './strength.pipe';

xdescribe('StrengthPipe', () => {
  xit('create an instance', () => {
    const pipe = new StrengthPipe();

    expect(pipe.transform(5)).toEqual('5 (weak)');
  });
});
